import { Component } from '@angular/core';
import { Todo } from '../../Model/bookstore.model';
import { TodoService } from '../../Services/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
newTodoTitle = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle.trim());
      this.newTodoTitle = '';
      this.loadTodos();
    }
  }

  

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.loadTodos();
  }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  updateTodoTitle(todo: Todo): void {
    if (todo.title.trim()) {
      this.todoService.updateTodoTitle(todo.id, todo.title.trim());
      todo.editing = false;
      this.loadTodos();
    } else {
      todo.editing = false;
    }
  }

  
}