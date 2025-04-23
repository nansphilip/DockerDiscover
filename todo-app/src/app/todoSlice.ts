'use client';

import { createSlice, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { TodoSlice } from '@/app/interfaces/stores/todoSlice';
import { Todo } from '@/app/interfaces/todo';

// API base URL - update this to your NestJS API URL
const API_BASE_URL = 'http://localhost:5000';

export const todoSlice =
    createSlice({
        name: 'todo',
        initialState: {
            status: 'idle',
            todos: []
        } as TodoSlice,
        reducers: {
            startLoading: state => {
                state.status = 'loading';
            },
            setTodos: (state, action) => {
                state.todos = action.payload;
                state.status = 'loaded';
            },
            addTodo: (state, action) => {
                state.todos = [
                    ...state.todos,
                    action.payload
                ]
            },
            editTodo: (state, action) => {
                state.todos = state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {
                            ...todo,
                            title: action.payload.title,
                            checked: action.payload.checked
                        }
                    }
                    return todo;
                });
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            }
        }
    });

// Define the type for the getState function
type GetState = () => { todo: TodoSlice };

export const loadApiTodos = async (dispatch: Dispatch<AnyAction>, getState: GetState) => {
    if (getState().todo.status !== 'idle') {
        return;
    }
    dispatch(startLoading());

    try {
        const response = await fetch(`${API_BASE_URL}/todos`);
        if (!response.ok) {
            throw new Error('Failed to fetch todos');
        }
        const todos = await response.json();
        dispatch(setTodos(todos));
    } catch (error) {
        console.error('Error loading todos:', error);
        dispatch(setTodos([]));
    }
}

export const addApiTodo = (todoTitle: string) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch(`${API_BASE_URL}/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: todoTitle })
            });
            
            if (!response.ok) {
                throw new Error('Failed to add todo');
            }
            
            const todo = await response.json();
            dispatch(addTodo(todo));
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }
}

export const editApiTodo = (todo: Todo) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/todos/${todo.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: todo.title,
                        checked: todo.checked
                    })
                });
                
            if (!response.ok) {
                throw new Error('Failed to update todo');
            }
            
            const updatedTodo = await response.json();
            dispatch(editTodo(updatedTodo));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    }
}

export const deleteApiTodo = (todoId: number) => {
    return async (dispatch: Dispatch<AnyAction>) => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/todos/${todoId}`,
                {
                    method: 'DELETE'
                }
            );
            
            if (!response.ok) {
                throw new Error('Failed to delete todo');
            }
            
            dispatch(removeTodo(todoId));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }
}

export const {startLoading, setTodos, addTodo, editTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;




















