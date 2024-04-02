import React, { useState } from "react";
import { Box, Button, Flex, Heading, Input, Select, Spinner, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const LANGUAGES = ["Spanish", "Chinese", "Hindi", "Arabic", "Portuguese", "Bengali", "Russian", "Japanese", "Punjabi", "German", "Javanese", "Wu", "Malay", "Telugu", "Vietnamese", "Korean", "French", "Marathi", "Tamil", "Urdu"];

const Index = () => {
  const [query, setQuery] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const translatedQueries = await Promise.all(
      selectedLanguages.map(async (lang) => {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4-turbo",
            messages: [
              {
                role: "system",
                content: `Translate the following English query to ${lang}, considering the cultural context and nuances of the language. Optimize the query for search relevance by applying advanced search parameters and operators.`,
              },
              { role: "user", content: query },
            ],
          }),
        });
        const data = await response.json();
        return data.choices[0].message.content;
      }),
    );

    const searchResults = await Promise.all(
      translatedQueries.map(async (translatedQuery, index) => {
        const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_SEARCH_ENGINE_ID}&q=${encodeURIComponent(translatedQuery)}`);
        const data = await response.json();
        return {
          language: selectedLanguages[index],
          results: data.items,
        };
      }),
    );

    setResults(searchResults);
    setLoading(false);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        Multilingual Web Search
      </Heading>
      <Flex mb={8}>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter your search query" mr={4} />
        <Select value={selectedLanguages} onChange={(e) => setSelectedLanguages(Array.from(e.target.selectedOptions, (option) => option.value))} placeholder="Select languages" multiple>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </Select>
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleSearch}>
          Search
        </Button>
      </Flex>
      {loading ? (
        <Spinner />
      ) : (
        <Flex wrap="wrap">
          {results.map((result) => (
            <VStack key={result.language} w="50%" p={4} spacing={4}>
              <Heading as="h2" size="lg">
                {result.language}
              </Heading>
              {result.results.map((item) => (
                <Box key={item.link} borderWidth={1} p={4} w="100%">
                  <Heading as="h3" size="md">
                    {item.title}
                  </Heading>
                  <Text>{item.snippet}</Text>
                </Box>
              ))}
            </VStack>
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Index;
