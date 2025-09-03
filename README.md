# Todo CLI App

**Theme Chosen:** To-Do List Manager

A simple command-line todo list application built with TypeScript for learning CRUD operations and CLI development.

## Project Description

This is a beginner-friendly CLI (Command Line Interface) application that allows you to manage your daily tasks. You can add tasks, view them, mark them as complete, edit them, delete them, and export them to files. The app is built using TypeScript and runs in the terminal, demonstrating core programming concepts like CRUD operations, file I/O, and user input handling.

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
8. **Error Recovery**: Making the app robust so it doesn't crash on invalid user input

### Improvements I'd Make With More Time

#### Enhanced Features:
1. **Data Persistence**: Save tasks to a JSON file so they persist between app sessions
2. **Task Priorities**: Add high/medium/low priority levels with color coding
3. **Due Dates**: Allow users to set deadlines and get reminders for overdue tasks
4. **Categories/Tags**: Organize tasks into categories like work, personal, shopping
5. **Search Functionality**: Find tasks by title keywords or content
6. **Task Statistics**: Show charts of completed vs pending tasks, productivity metrics
7. **Undo Feature**: Allow users to undo recent actions like deletions

#### User Experience:
8. **Better UI**: Add colors, icons, and better formatting using libraries like chalk
9. **Keyboard Shortcuts**: Quick actions without going through menus
10. **Auto-save**: Automatically save changes without manual export
11. **Import Feature**: Load tasks from JSON/CSV files
12. **Bulk Operations**: Select and operate on multiple tasks at once

#### Technical Improvements:
13. **Unit Testing**: Add Jest tests for all CRUD operations
14. **Configuration File**: Allow users to customize app settings
15. **Database Integration**: Use SQLite or another database instead of in-memory storage
16. **API Integration**: Sync tasks with cloud services like Google Tasks
17. **Better Error Logging**: More detailed error messages and logging system

## Technologies Used

- **TypeScript**: Main programming language providing type safety and modern JavaScript features
- **Node.js**: Runtime environment for executing JavaScript outside the browser
- **readline-sync**: Library for synchronous user input in command-line applications
- **fs (File System)**: Node.js built-in module for file read/write operations
- **path**: Node.js built-in module for working with file and directory paths
- **npm**: Package manager for managing dependencies and build scripts

## Project Structure

```
todo-cli-app/
├── src/
│   ├── models/
│   │   └── Task.ts          # Task interface definition (id, title, completed)
│   ├── services/
│   │   └── TaskService.ts   # Business logic for CRUD + Export operations
│   ├── cli.ts               # Command-line interface and user interaction
│   └── index.ts             # Application entry point
├── dist/                    # Compiled JavaScript files (auto-generated)
├── .gitignore              # Files to ignore in version control
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## License

This is a learning project created for educational purposes as part of an internship program.
