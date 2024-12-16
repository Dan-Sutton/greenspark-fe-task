# Greenspark Frontend Task

Welcome to the Greenspark Frontend Task project! This project is built using Next.js and demonstrates the implementation of a product widget system.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Testing](#testing)
- [Project Explaination](#project-explaination)

## Introduction

This project is a frontend task for Greenspark, showcasing a product widget system. The application allows users to view and interact with various product widgets, each representing different types of products and actions.

## Features

- Display multiple product widgets
- Fetch product data from an API
- Store product data in local storage
- Update product widget properties (color, active state, linked state)
- Tooltip for additional information
- Comprehensive unit tests

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dan-Sutton/greenspark-fe-task.git
   cd greenspark-frontend-task
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Project

To start the development server, run:

    npm run dev

Open your browser and navigate to http://localhost:3000 to see the application in action.

### Testing

This project uses Jest and React Testing Library for unit testing. To run the tests, use the following command:

    npm test

## Project Explanation

### Overview

The Greenspark Frontend Task project is an interactive web application built using Next.js. This project demonstrates my ability to create a dynamic and responsive user interface, manage state effectively, and implement robust testing practices. The application showcases a product widget system where users can view and interact with various product widgets, each representing different types of products and actions.

### Technical Implementation

1. **Next.js Framework**: The project is built using Next.js, a powerful React framework that enables server-side rendering and static site generation. This choice ensures optimal performance and SEO benefits.

2. **Custom Hooks**: The `useProductWidgets` custom hook is a key part of the project, encapsulating the logic for data fetching, state management, and local storage interaction. This modular approach promotes code reusability and maintainability.

3. **Component-Based Architecture**: The application follows a component-based architecture, with each component responsible for a specific part of the UI. This approach makes the codebase more organised and easier to manage.

4. **Testing with Jest and React Testing Library**: Comprehensive unit tests are written using Jest and React Testing Library. These tests cover various aspects of the application, including data fetching, state updates, and user interactions. This ensures the reliability and robustness of the application.

5. **CSS Modules with BEM**: The project uses CSS Modules for styling, following the BEM (Block Element Modifier) naming convention. This approach allows for scoped and maintainable CSS, preventing style conflicts and making it easier to manage styles in a large application.

### Solutions

1. **Ensuring Only One Active Widget**: One of the main focus points for me was to ensure that only one product widget can be active at a time. This was achieved by updating the `handleWidgetUpdate` function to set the `active` property to `false` for all other widgets when one is activated.

2. **Fetching and Storing Data**: Managing data fetching and storage in local storage was another point of focus. The `useProductWidgets` hook handles this efficiently by checking for existing data in local storage before making API calls, ensuring a smooth user experience.

3. **Comprehensive Testing**: Writing comprehensive tests to cover all aspects of the application required careful planning. The tests ensure that the application behaves as expected under various scenarios, providing confidence in the code quality.

### Conclusion

This project demonstrates my ability to build a complex and interactive web application using modern web development practices. It showcases my skills in React, Next.js, state management, user interactions, and testing. I am confident that this project highlights my capabilities and readiness to contribute effectively to your team.

If I had more time, I would have liked to explore implementing Storybook, as I personally feel that it is an exptremely useful tool. I would also have liked to spend some time testing the accessibility of Project's components e.g. screen reader and colour contrast.

Thank you for reviewing my work. I look forward to the opportunity to discuss how I can contribute to your organization.
