# BTC Price Tracker

## Overview
This is a React app which fetches and displays Bitcoin price data for various fiat currencies using the CoinGecko API. The application consists of an overview/home page listing different currency pairs and a details page displaying relevant data for the selected pair.

## Technologies Used
- React: Used for building the frontend UI components and managing state.
- Tailwind CSS: Used for styling the components and ensuring responsiveness.
- TypeScript: Used for type-checking and improving code quality.
- CoinGecko API: Used for fetching cryptocurrency price data.

## Approach
1. **Project Setup**: Created a new React project using Create React App and installed necessary dependencies.
2. **Component Development**: Developed the homepage page (`HomePage`) to display currency pairs and the detail page (`DetailPage`) to show relevant data for the selected pair.
3. **API Integration**: Integrated the CoinGecko APIs to fetch Bitcoin price data for different fiat currencies.
6. **Data Refresh**: Implemented functionality to update prices every 10 seconds using `setInterval`.

## Implemented Best Coding Practices

- Code modularization into multiple files for reusability and maintainability.
- Addition of utility functions for common tasks.
- Centralization of constants in a separate file for easy modification.
- Definition of types in a separate file for widespread usage.
- Design of highly reusable and customizable components through props.
- Adoption of informative commit messages for better version control.
- Deployment of the web application on Vercel for real-time testing.

## Running the App
To run the application locally:
1. Clone the repository from GitHub
2. Navigate to the project directory.
3. Install dependencies: `npm install`.
4. Start the development server: `npm start`.
5. Open your browser and navigate to `http://localhost:3000`.


## Future Improvements
- Implement additional features such as currency conversion.
- Enhance UI design and user experience.