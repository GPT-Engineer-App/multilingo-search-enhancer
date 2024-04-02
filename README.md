# multilingo-search-enhancer

Objective: Develop a multilingual web search interface that enhances user queries for optimized search results across various languages.

Tool Requirements:

User Interface: Implement a user-friendly web interface where users can input a search query in English.
Language Selection: Provide a selection list of the top 20 most spoken non-English languages for users to choose from.
Query Translation and Optimization: Utilize the GPT-4-Turbo API to translate the English query into the user's selected languages. The translation should:
Not be a direct verbatim translation; instead, leverage GPT-4-Turbo's capabilities to understand and apply advanced search parameters and operators.
Consider the nuances of each selected language and the cultural context of the associated countries to craft a query optimized for retrieving the most relevant results.
Parallel Searches: Execute multiple Google searches in parallel for each translated query.
Results Presentation: Display the search results in side-by-side columns on the webpage, with all non-English search results translated back to English for easy comparison.
Goals:

Enhance Search Relevance: The application should aim to limit irrelevant results by generating search queries that reflect an understanding of the user's intentions, leveraging the advanced capabilities of GPT-4-Turbo.
User Experience: Ensure a seamless and intuitive user experience from query input to results presentation, emphasizing ease of language selection and clarity of the results display.
Considerations:

Keep the user interface simple and intuitive, avoiding information overload.
Prioritize efficiency in query processing and results retrieval to minimize user wait times.
Ensure accuracy in translations and relevance in search results to foster trust and reliance on the tool.
Expected Outcome: A web application that breaks language barriers in information retrieval, providing users with a powerful tool to conduct searches in multiple languages simultaneously and compare results efficiently, all within a single, user-friendly platform.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/multilingo-search-enhancer.git
cd multilingo-search-enhancer
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
