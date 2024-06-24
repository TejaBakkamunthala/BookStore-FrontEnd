import { Injectable } from '@angular/core';
import { Todo } from '../../Model/bookstore.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  private intialId = 1;

  constructor() { }

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const adding: Todo = { id: this.intialId++,title, completed: false };
    this.todos.push(adding);
  }

  updateTodoTitle(id: number, todoNewTitle: string): void {
    const todo = this.todos.find(t => t.id == id);
    if (todo) {
      todo.title = todoNewTitle;
    }
  }


  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id != id);
  }
}
