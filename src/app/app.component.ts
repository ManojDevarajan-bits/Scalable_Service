import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Manoj Assignment';

  newTodo = '';
  todos: { id: number; text: string; done: boolean }[] = [];

  ngOnInit(): void {
    this.load();
  }

  addTodo(): void {
    const text = (this.newTodo || '').trim();
    if (!text) return;
    this.todos.unshift({ id: Date.now(), text, done: false });
    this.newTodo = '';
    this.save();
  }

  toggleDone(item: { id: number; text: string; done: boolean }): void {
    item.done = !item.done;
    this.save();
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
    this.save();
  }

  save(): void {
    try {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    } catch (e) {
      // ignore storage errors
    }
  }

  load(): void {
    try {
      const raw = localStorage.getItem('todos');
      if (raw) this.todos = JSON.parse(raw) || [];
    } catch (e) {
      this.todos = [];
    }
  }
}
