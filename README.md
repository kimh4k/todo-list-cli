# Todo CLI Application

## Description
This is a Command-Line Interface (CLI) app for managing tasks, built using TypeScript. It provides CRUD (Create, Read, Update, Delete) functionality, along with features like export to JSON and CSV files.

## Features
- **Add a new task**: Add a task with a title and completion status.
- **List all tasks**: View your entire task list with their completion status.
- **Update a task**: Edit task titles and toggle completion status.
- **Delete a task**: Remove a task from your list with confirmation.
- **Export Functionality**: Save your task list to JSON or CSV files.

## Instructions on How to Run the App

### Prerequisites
- Node.js (v14 or newer recommended)
- npm (usually included with Node.js)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/kimh4k/todo-list-cli.git
   cd todo-list-cli
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```
   This command will first compile the TypeScript code into JavaScript in a `dist` folder and then run the application.

## Mini Report

### What I Learned
- Learned to structure TypeScript project using CommonJS modules, including the necessary configurations in `package.json` and `tsconfig.json`.
- Practiced organizing the code into distinct layers: Models (data structure), Services (business logic), and CLI (user interface).
- Learned to use the `readline-sync` library to create interactive command-line interface with user input.
- Implemented file I/O operations for exporting data to JSON and CSV formats.

### Challenges Faced
- Setting up TypeScript configuration and understanding module systems.
- Implementing proper user input validation and error handling.
- Managing unique task IDs and array manipulation for CRUD operations.
- Learning CSV formatting with proper quote escaping for special characters.

### Future Improvements
- **Data Persistence**: Implement automatic saving to JSON file on exit and loading on startup.
- **Task Priorities**: Add priority levels (high, medium, low) with color coding.
- **Due Dates**: Allow users to set deadlines for tasks.
- **Search Functionality**: Search tasks by title or keywords.