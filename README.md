# Todo List Application

## Overview

This is a Todo List application built with React that allows users to:
- Display a list of todo items.
- Add a new todo item.
- Mark a todo item as completed.
- Remove a todo item.
- Filter todo items by all, active, and completed states.
- Authenticate and authorize users using JWT.
- Fetch and display data from an external API.

The application also includes unit tests for all main components to ensure functionality and reliability.

## Features

1. **Todo Management:**
   - Add, remove, and mark tasks as complete.
   - Filter tasks based on their status (all, active, completed).
2. **Authentication:**
   - Login and logout functionality.
   - Secure routes with JWT authentication.
3. **API Interaction:**
   - Fetch initial todo items from the JSONPlaceholder API.
4. **Routing:**
   - Home, Todo, and About views.
5. **Unit Testing:**
   - Comprehensive tests using Jest and React Testing Library.
6. **Styling:**
   - Responsive design with CSS.

## Setup and Run the Application

### Prerequisites

- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository:**
   git clone https://github.com/sud/todo-app.git
   cd todo-app

2. **Install dependencies:**
   npm install

### Running the Application

1. **Start the development server:**
   npm start
   The application will be available at `http://localhost:3000`.

### Running the Unit Tests

1. **Run the tests:**
   npm test
   This command runs all the unit tests using Jest and React Testing Library.

## Assumptions and Decisions

- **Authentication:** For simplicity, the application uses a fake JWT token for authentication. In a real application, you would replace this with real authentication logic.
- **API:** The JSONPlaceholder API is used to fetch initial todo items. This is a placeholder and should be replaced with a real backend API.
- **Routing:** React Router is used for navigating between Home, Todo, and About views.
- **Styling:** Basic CSS is used for styling. The design is responsive to ensure usability on different screen sizes.

## Branching Strategy

- **Main Branch:** The `main` branch contains the stable and tested code.
- **Feature Branches:** Each feature (e.g., authentication, API interaction, unit tests) was developed in separate branches (e.g., `feature/authentication`, `feature/api-interaction`), and merged into the `main` branch after testing.
- **Bugfix Branches:** Any bugs found during development or testing were fixed in `bugfix` branches and then merged back into the `main` branch.

## File Structure

todo-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TodoApp/
│   │   ├── TodoForm/
│   │   ├── TodoFilter/
│   │   ├── TodoList/
│   │   ├── AuthContext.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── About.js
│   │   └── ...
│   ├── tests/
│   │   ├── __tests__/
│   │   │   ├── TodoApp.test.js
│   │   │   ├── TodoForm.test.js
│   │   │   ├── TodoFilter.test.js
│   │   │   ├── TodoList.test.js
│   │   │   ├── Login.test.js
│   │   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── README.md
├── package.json
└── ...


---

This README file provides a comprehensive guide to your Todo List application, covering all the important aspects from setup and usage to testing and project structure.