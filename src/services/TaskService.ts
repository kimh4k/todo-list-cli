import { Task } from '../models/Task';
import fs from 'fs';
import path from 'path';

export class TaskService {
  private tasks: Task[] = [];
  private nextId: number = 1;

  addTask(title: string): Task {
    const newTask: Task = {
      id: this.nextId,
      title: title,
      completed: false
    };
    
    this.tasks.push(newTask);
    this.nextId++;
    return newTask;
  }


  getAllTasks(): Task[] {
    return this.tasks;
  }


  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }


  completeTask(id: number): boolean {
    const task = this.getTaskById(id);
    if (task) {
      task.completed = true;
      return true;
    }
    return false;
  }


  editTask(id: number, newTitle: string): boolean {
    const task = this.getTaskById(id);
    if (task) {
      task.title = newTitle;
      return true;
    }
    return false;
  }

  deleteTask(id: number): boolean {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  exportToJSON(filename?: string): string {
    const defaultFilename = `tasks_${new Date().toISOString().split('T')[0]}.json`;
    const fileName = filename || defaultFilename;
    const filePath = path.join(process.cwd(), fileName);
    
    try {
      const exportData = {
        exportDate: new Date().toISOString(),
        totalTasks: this.tasks.length,
        tasks: this.tasks
      };
      
      fs.writeFileSync(filePath, JSON.stringify(exportData, null, 2));
      return filePath;
    } catch (error) {
      throw new Error(`Failed to export to JSON: ${error}`);
    }
  }

  exportToCSV(filename?: string): string {
    const defaultFilename = `tasks_${new Date().toISOString().split('T')[0]}.csv`;
    const fileName = filename || defaultFilename;
    const filePath = path.join(process.cwd(), fileName);
    
    try {
      let csvContent = 'ID,Title,Status\n';
      
      for (const task of this.tasks) {
        const status = task.completed ? 'Completed' : 'Pending';
        const title = task.title.includes(',') ? `"${task.title.replace(/"/g, '""')}"` : task.title;
        csvContent += `${task.id},${title},${status}\n`;
      }
      
      fs.writeFileSync(filePath, csvContent);
      return filePath;
    } catch (error) {
      throw new Error(`Failed to export to CSV: ${error}`);
    }
  }
}
