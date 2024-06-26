# Azka Tech Assignment

A brief description or tagline about your project.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Auth Structure](#auth-structure)
  - [Settings Structure](#settings-structure)
  - [Router Structure](#router-structure)
  - [Pages Structure](#pages-structure)
- [Setup Instructions](#setup-instructions)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is a React TypeScript web application featuring various functionalities such as user authentication, dashboard with shortcuts, user profile pages with posts, and an announcement feed page. It integrates with the [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) API to fetch and display user-related data and posts.

## Features

- Dashboard with shortcuts for easy navigation
- User authentication using Redux store (username: admin@email.com, password: 123)
- Pages:
  - List of Users
  - User Profile with Posts
  - Announcement Page with Feeds of All Posts
- Responsive design for both mobile and desktop platforms

## Project Structure

/src
├── @types # TypeScript type definitions
├── assets # Static assets like images, fonts
├── components # Reusable UI components
├── layout # Layout components (header, footer)
├── pages # Application pages
│ ├── announcement # Announcement related pages and hooks
│ ├── auth # Authentication related pages and hooks
│ ├── errors # Error handling related pages
│ ├── home # Home page
│ └── users # User related pages and hooks
├── router # Router configuration
│ ├── announcement # Announcement routes
│ ├── auth # Authentication routes
│ ├── errors # Error routes
│ ├── protected # Protected routes (requires authentication)
│ ├── users # User routes
│ └── index.tsx # Main router configuration
├── services # Backend services
│ ├── api # API configuration and setup
│ ├── apiFunctions # Functions for API calls
│ ├── entities # Entities and Interfaces used in the app
│ └── responseFunctions # Functions for handling API responses
├── store # Redux store configuration
│ ├── auth # Authentication related state management
│ │ ├── actions # Redux actions
│ │ ├── interface # Interfaces related to authentication
│ │ ├── reducers # Redux reducers
│ │ ├── selectors # Selectors for accessing auth state
│ │ └── state # Initial state for auth
│ ├── settings # Settings related state management
│ │ ├── actions # Redux actions
│ │ ├── interface # Interfaces related to settings
│ │ ├── reducers # Redux reducers
│ │ ├── selectors # Selectors for accessing settings state
│ │ └── state # Initial state for settings
│ └── interface # Interface of the whole store
├── utilities # Utility functions used across the project
└── App.tsx # Main application component

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yasserbraidy/azkaTechAssignment.git
   cd azkaTechAssignment

2. Install Dependencies
    Before starting the application, ensure all dependencies are installed. Navigate to the project directory and run:

    ```bash
    npm install

3. Start Development Server

    To start the development server and run the application locally:

    ```bash
    npm start

    This command starts the development server and opens the application in your default web browser. You can view the application by   navigating to http://localhost:3000 in your browser.
    
## Technologies Used

The main technologies, frameworks, and libraries used in this project include:

### Main Technologies
    React.js
    TypeScript
    Redux (for state management)
    Redux Toolkit (Toolkit for efficient Redux development)
    React Router (for navigation)
    ApexCharts (for data visualization)
    Bootstrap (for styling)
    SweetAlert2 (for alerts)
    React Bootstrap (Bootstrap components built for React)
    Framer Motion (Animation library for React)
    React CountUp (React component wrapper around CountUp.js)
    React Transition Group ( An easy way to perform animations when a React component enters or leaves the DOM)
    Choices.js (A configurable select box/text input plugin)

### Data Visualization and Utility Libraries:
    ApexCharts (apexcharts: ^3.49.1) - (Modern JavaScript charting library)
    Lodash (lodash: ^4.17.21) - (Utility library delivering consistency, modularity, and performance)

### Other Tools and Utilities:
    JS Cookie (A simple, lightweight JavaScript API for handling cookies)
    TypeScript (Typed superset of JavaScript that compiles to plain JavaScript)
    Web Vitals (Library for measuring real user website performance metrics)
    Smooth Scrollbar (Customizable scrollbar plugin)

## API Integration

This project integrates with the jsonplaceholder.typicode.com API. It utilizes endpoints to fetch user data and posts, which are then displayed across various pages within the application.
Screenshots

Include screenshots of your application here if available. Screenshots help visualize the interface and functionality of your application.

## Contributing

Contributions are welcome! To contribute to this project, please follow these steps:

    Fork the repository
    Create a new branch (git checkout -b feature)
    Make your changes
    Commit your changes (git commit -am 'Add new feature')
    Push to the branch (git push origin feature)
    Create a new Pull Request

## Screenshots

### Dashboard Page
![Dashboard Page](screenshots/dashboard.png)

### Sign-In Page
![Sign-In Page](screenshots/signInPage.png)

### Sign-Out Page
![Sign-Out Page](screenshots/logout.png)

### Users Page
![Users Page](screenshots/viewAllUserPage.png)

### User Profile Page
![User Profile Page](screenshots/userProfilePage.png)

### User Feeds Page
![User Feeds Page](screenshots/userFeedPage.png)

### Add User Page
![Add User Page](screenshots/addUserPage.png)

### Validation Alert
![Validation Alert](screenshots/validationAlert.png)

### Success Alert
![Success Alert](screenshots/OnAddUserPage.png)

### Announcement Page
![Announcement Page](screenshots/AnnouncementPage.png)

### Loading
![Loading Page](screenshots/loading.png)

### Error404 Page
![Error Page](screenshots/error404Page.png)