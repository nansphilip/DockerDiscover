/**
 * Represents a Todo item
 */
export class Todo {
  readonly id: number;
  title: string;
  checked: boolean;

  constructor(id: number, title: string, checked: boolean = false) {
    this.id = id;
    this.title = title;
    this.checked = checked;
  }
} 