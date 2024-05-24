# Mobiz Technical Assessment - Dolat Hamza

## Overview

This project is built using modern web development tools and libraries to provide a robust, responsive, and interactive
user experience. The primary focus is on utilizing the capabilities of Next.js for server-side rendering and static site
generation, along with Ant Design for UI components and Tailwind CSS for styling.

## Table of Contents

- [Dependencies](#dependencies)
- [Setup](#setup)
- [Usage](#usage)
- [External Libraries and APIs](#external-libraries-and-apis)
- [Project Structure](#project-structure)
- [Directory Structure](#directy-structure)

## Dependencies

The project relies on the following dependencies:

```json
"dependencies": {
"@ant-design/cssinjs": "^1.20.0",
"antd": "^5.17.3",
"formik": "^2.4.6",
"framer-motion": "^11.2.6",
"highcharts": "^11.4.3",
"highcharts-react-official": "^3.2.1",
"next": "14.2.3",
"next-auth": "^4.24.7",
"next-themes": "^0.3.0",
"react": "^18",
"react-dom": "^18",
"yup": "^1.4.0"
}
```

- **@ant-design/cssinjs**: Used for styling with Ant Design.
- **antd**: A popular React UI library for building user interfaces.
- **formik**: A library for building forms in React, making form state management easier.
- **framer-motion**: Used for animations in React applications.
- **highcharts**: A charting library for creating interactive charts.
- **highcharts-react-official**: The official Highcharts wrapper for React.
- **next**: A React framework for server-side rendering and static site generation.
- **next-auth**: Authentication for Next.js applications.
- **next-themes**: Theme management for Next.js.
- **react**: A JavaScript library for building user interfaces.
- **react-dom**: Serves as the entry point to the DOM and server renderers for React.
- **yup**: A schema builder for value parsing and validation.

Additionally, **Tailwind CSS** is used for utility-first CSS styling.

## Setup

To set up the project locally:

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Usage

To run the project locally:

```sh
npm run dev
```

This will start the development server on `http://localhost:3000`.

## External Libraries and APIs

### Dummy JSON API

The project uses the Dummy JSON API (https://dummyjson.com) for fetching sample data.

### Fetch API

The native Fetch API is used for making HTTP requests to external services.

## Project Structure

```
/public
    # Static assets
/pages
    # Next.js pages
/components
    # React components
/styles
    # CSS and Tailwind styles
```

## Directory Structure

````
src
├── components
│   ├── Common
│   │   ├── Chart.tsx
│   │   ├── Filter.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Logo.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProductTable.tsx
│   │   ├── RequireAuth.tsx
│   │   ├── Sidebar.tsx
│   │   └── ThemeSwitch.tsx
│   ├── Home
│   │   ├── About.tsx
│   │   ├── CallToAction.tsx
│   │   ├── ErrorAlert.tsx
│   │   ├── FeatureHighlights.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── Pricing.tsx
│   │   └── ProductGrid.tsx
│   ├── OrderForm.tsx
│   ├── ProductForm.tsx
│   └── Products
│       ├── AverageRating.tsx
│       ├── BrandPopularityChart.tsx
│       ├── DashboardLayout.tsx
│       ├── PriceDisplay.tsx
│       ├── PriceDistributionChart.tsx
│       ├── ProductCategoryChart.tsx
│       ├── ProductTable.tsx
│       ├── ProfitAnalysis.tsx
│       ├── SalesForecast.tsx
│       ├── StockIndicator.tsx
│       ├── StockLevelGauge.tsx
│       ├── ThumbnailImage.tsx
│       └── TopSellingProducts.tsx
├── context
│   └── ThemeContext.tsx
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth].ts
│   │   └── hello.ts
│   ├── auth
│   │   └── login.tsx
│   ├── dashboard.tsx
│   ├── index.tsx
│   ├── protected.tsx
│   └── users
│       ├── [userId]
│       │   ├── edit.tsx
│       │   └── index.tsx
│       ├── create.tsx
│       └── index.tsx
├── styles
│   └── globals.css
└── utils
    ├── ApiCalls.ts
    ├── Interfaces.ts
    ├── ProductCalculations.ts
    └── validation.ts
````

## Graphical View

![Alt text](public/images/src.png)

