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

## Functionality

### Core CRUD Operations:
- **Create**: Add new tasks to your todo list with unique IDs
- **Read**: View all your tasks with their status (TODO/DONE)
- **Update**: Edit task titles and mark tasks as complete/incomplete
- **Delete**: Remove tasks you no longer need (with confirmation)

### Export Features:
- **JSON Export**: Save all tasks to a JSON file with metadata (export date, task count)
- **CSV Export**: Export tasks to CSV format for use in spreadsheet applications
- **Custom Filenames**: Choose your own filename or use auto-generated names with dates

### User Interface:
- Simple text-based menu with numbered options (1-7)
- Easy-to-understand prompts and messages
- Loop-based interface that keeps running until you choose to exit
- Input validation and error handling

## How to Run the App

### Prerequisites
- **Node.js** (version 14 or higher) installed on your computer
- **npm** (comes with Node.js)

### Step-by-Step Installation

1. **Clone or download the project:**
   ```bash
   # If using git
   git clone <repository-url>
   # Or download and extract the ZIP file
   ```

2. **Navigate to the project directory:**
   ```bash
   cd todo-cli-app
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Build the TypeScript project:**
   ```bash
   npm run build
   ```

5. **Run the application:**
   ```bash
   npm start
   ```

### Alternative Running Methods

**Development Mode** (runs TypeScript directly):
```bash
npm run dev
```

**Direct execution** (after building):
```bash
node dist/index.js
```

**Clean build files:**
```bash
npm run clean
```

## How to Use

When you start the app, you'll see a menu like this:

```
Welcome to Todo List App!
========================

--- TODO MENU ---
1. Add new task
2. View all tasks
3. Mark task as complete
4. Edit task
5. Delete task
6. Export tasks
7. Exit
Enter your choice:
```

### Available Operations:

1. **Add new task**: Enter a task title and it will be added to your list with a unique ID
2. **View all tasks**: See all your tasks with their ID numbers and completion status ([TODO] or [DONE])
3. **Mark task as complete**: Choose a task by ID to mark it as done
4. **Edit task**: Change the title of an existing task
5. **Delete task**: Remove a task permanently (with confirmation prompt)
6. **Export tasks**: 
   - Choose JSON format for structured data with metadata
   - Choose CSV format for spreadsheet compatibility
   - Enter custom filename or use auto-generated names (tasks_YYYY-MM-DD.json/csv)
7. **Exit**: Close the application

### Example Usage:
```
1. Add "Buy groceries" → Task added with ID 1
2. Add "Study TypeScript" → Task added with ID 2  
3. View tasks → Shows both tasks as [TODO]
4. Complete task 1 → "Buy groceries" becomes [DONE]
5. Export to CSV → Creates tasks_2025-09-03.csv file
```

## Project Structure

```
todo-cli-app/
├── src/
│   ├── models/
│   │   └── Task.ts          # Task interface definition
│   ├── services/
│   │   └── TaskService.ts   # Business logic for CRUD operations
│   ├── cli.ts               # Command-line interface logic
│   └── index.ts             # Application entry point
├── .gitignore              # Files to ignore in version control
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

Note: The `dist/` folder will be created when you run `npm run build` and contains the compiled JavaScript files.

## Mini Report

### What I Learned

#### Programming Concepts:
- **TypeScript Fundamentals**: Learned interfaces, classes, types, and how TypeScript compiles to JavaScript
- **Object-Oriented Programming**: Used classes and methods to organize code into logical components
- **CRUD Operations**: Implemented Create, Read, Update, Delete - the foundation of most data applications
- **Array Manipulation**: Used find(), filter(), splice(), and push() methods to manage task data
- **File I/O Operations**: Learned to read and write files using Node.js fs module for export functionality
- **User Input Handling**: Used readline-sync library to create interactive CLI experiences
- **Control Flow**: Implemented if/else statements, loops, and input validation
- **Error Handling**: Added try-catch blocks and user-friendly error messages

#### Development Skills:
- **Project Organization**: Structured code into models, services, and CLI layers for maintainability
- **TypeScript Configuration**: Set up tsconfig.json and package.json for proper compilation
- **Module System**: Learned ES6 imports/exports to share code between files
- **Command Line Development**: Built applications that run in terminal environments
- **Git Workflow**: Used .gitignore and proper project structure for version control
- **Package Management**: Used npm to manage dependencies and build scripts

### Challenges Faced

1. **TypeScript Configuration**: Initially struggled with setting up TypeScript compilation and module resolution
2. **Module Import/Export**: Understanding the difference between CommonJS and ES modules took practice
3. **User Input Validation**: Ensuring users enter valid data and providing helpful error messages
4. **ID Management**: Implementing a simple auto-incrementing ID system for tasks
5. **Array Operations**: Learning to safely modify arrays without causing index issues
6. **File Path Handling**: Understanding how to work with file paths across different operating systems
7. **CSV Format**: Learning proper CSV formatting including quote escaping for commas in text

### Improvements I'd Make With More Time

#### Enhanced Features:
1. **Data Persistence**: Save tasks to a JSON file so they persist between app sessions
2. **Task Priorities**: Add high/medium/low priority levels
3. **Due Dates**: Allow users to set deadlines and get reminders for overdue tasks
4. **Categories/Tags**: Organize tasks into categories like work, personal, shopping
5. **Search Functionality**: Find tasks by title keywords or content

7. **Undo Feature**: Allow users to undo recent actions like deletions