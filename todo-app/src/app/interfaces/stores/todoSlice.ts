import { Todo } from '@/app/interfaces/todo';

export interface TodoSlice {
    todos: Todo[];
    status: 'idle' | 'loading' | 'loaded';
}