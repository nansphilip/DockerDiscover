import { Todo } from '@/app/interfaces/todo';
import { TodoItem } from '@/app/components/todoItem';
import { TodoInput } from '@/app/components/todoInput';
import { useSelector } from 'react-redux';
import { Store } from '@/app/interfaces/stores/store';
import store from '@/app/store';
import { loadApiTodos } from '@/app/todoSlice';
import { useEffect } from 'react';

export function TodoHome() {
    const todos: Todo[] = useSelector((state: Store) => state.todo.todos);

    useEffect(() => {
        store.dispatch(loadApiTodos);
    }, []);

    const logTodos = () => console.log(todos);

    const todosDisplay: JSX.Element[] = todos.map(
        todo =>
            <TodoItem key={todo.id} todoParam={todo}/>
    );

    return (
        <>
            <h1 className="text-2xl mb-10">Welcome to TodoApp !</h1>
            <TodoInput />
            <div>{todosDisplay}</div>

            <button onClick={logTodos} className="bg-blue-500 text-white p-2 m-2 mt-10 rounded-md">
                Show todos in console
            </button>
        </>
    );
}