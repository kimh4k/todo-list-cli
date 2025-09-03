import * as readlineSync from 'readline-sync';
import { TaskService } from './services/TaskService';

export class TodoCLI {
  private taskService: TaskService;

  constructor() {
    this.taskService = new TaskService();
  }

  start(): void {
    console.log('Welcome to Todo List App!');
    console.log('========================');
    
    while (true) {
      this.showMenu();
      const choice = readlineSync.question('Enter your choice: ');
      
      if (choice === '1') {
        this.addTask();
      } else if (choice === '2') {
        this.viewTasks();
      } else if (choice === '3') {
        this.completeTask();
      } else if (choice === '4') {
        this.editTask();
      } else if (choice === '5') {
        this.deleteTask();
      } else if (choice === '6') {
        this.exportTasks();
      } else if (choice === '7') {
        console.log('Goodbye!');
        break;
      } else {
        console.log('Invalid choice. Please try again.');
      }
      
      console.log();
    }
  }

  private showMenu(): void {
    console.log('\n--- TODO MENU ---');
    console.log('1. Add new task');
    console.log('2. View all tasks');
    console.log('3. Mark task as complete');
    console.log('4. Edit task');
    console.log('5. Delete task');
    console.log('6. Export tasks');
    console.log('7. Exit');
  }


  private addTask(): void {
    const title = readlineSync.question('Enter task title: ');
    
    if (title.trim() === '') {
      console.log('Task title cannot be empty.');
      return;
    }

    const task = this.taskService.addTask(title.trim());
    console.log(`Task added successfully! ID: ${task.id}`);
  }


  private viewTasks(): void {
    const tasks = this.taskService.getAllTasks();
    
    if (tasks.length === 0) {
      console.log('No tasks found.');
      return;
    }

    console.log('\n--- YOUR TASKS ---');
    for (const task of tasks) {
      const status = task.completed ? '[DONE]' : '[TODO]';
      console.log(`${task.id}. ${status} ${task.title}`);
    }
  }


  private completeTask(): void {
    this.viewTasks();
    
    if (this.taskService.getAllTasks().length === 0) {
      return;
    }

    const idInput = readlineSync.question('Enter task ID to mark as complete: ');
    const id = parseInt(idInput);
    
    if (isNaN(id)) {
      console.log('Please enter a valid number.');
      return;
    }

    const success = this.taskService.completeTask(id);
    
    if (success) {
      console.log('Task marked as complete!');
    } else {
      console.log('Task not found.');
    }
  }


  private editTask(): void {
    this.viewTasks();
    
    if (this.taskService.getAllTasks().length === 0) {
      return;
    }

    const idInput = readlineSync.question('Enter task ID to edit: ');
    const id = parseInt(idInput);
    
    if (isNaN(id)) {
      console.log('Please enter a valid number.');
      return;
    }

    const task = this.taskService.getTaskById(id);
    if (!task) {
      console.log('Task not found.');
      return;
    }

    console.log(`Current title: ${task.title}`);
    const newTitle = readlineSync.question('Enter new title: ');
    
    if (newTitle.trim() === '') {
      console.log('Task title cannot be empty.');
      return;
    }

    const success = this.taskService.editTask(id, newTitle.trim());
    
    if (success) {
      console.log('Task updated successfully!');
    } else {
      console.log('Failed to update task.');
    }
  }


  private deleteTask(): void {
    this.viewTasks();
    
    if (this.taskService.getAllTasks().length === 0) {
      return;
    }

    const idInput = readlineSync.question('Enter task ID to delete: ');
    const id = parseInt(idInput);
    
    if (isNaN(id)) {
      console.log('Please enter a valid number.');
      return;
    }

    const task = this.taskService.getTaskById(id);
    if (!task) {
      console.log('Task not found.');
      return;
    }

    const confirm = readlineSync.question(`Are you sure you want to delete "${task.title}"? (y/n): `);
    
    if (confirm.toLowerCase() === 'y') {
      const success = this.taskService.deleteTask(id);
      if (success) {
        console.log('Task deleted successfully!');
      } else {
        console.log('Failed to delete task.');
      }
    } else {
      console.log('Delete cancelled.');
    }
  }

  private exportTasks(): void {
    const tasks = this.taskService.getAllTasks();
    
    if (tasks.length === 0) {
      console.log('No tasks to export.');
      return;
    }

    console.log('\n--- EXPORT TASKS ---');
    console.log('1. Export to JSON file');
    console.log('2. Export to CSV file');
    
    const choice = readlineSync.question('Choose export format: ');
    
    if (choice === '1') {
      this.exportToJSON();
    } else if (choice === '2') {
      this.exportToCSV();
    } else {
      console.log('Invalid choice.');
    }
  }

  private exportToJSON(): void {
    try {
      const filename = readlineSync.question('Enter filename (press Enter for default): ').trim();
      const filePath = this.taskService.exportToJSON(filename || undefined);
      console.log(`Tasks exported successfully to: ${filePath}`);
    } catch (error) {
      console.log(`Export failed: ${error}`);
    }
  }


  private exportToCSV(): void {
    try {
      const filename = readlineSync.question('Enter filename (press Enter for default): ').trim();
      const filePath = this.taskService.exportToCSV(filename || undefined);
      console.log(`Tasks exported successfully to: ${filePath}`);
    } catch (error) {
      console.log(`Export failed: ${error}`);
    }
  }
}
