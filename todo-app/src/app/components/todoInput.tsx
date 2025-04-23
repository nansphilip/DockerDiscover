import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addApiTodo } from '@/app/todoSlice';
import store from '@/app/store';

export function TodoInput() {
    const dispatch = useDispatch();
    const [
        todoInput,
        setTodoInput
    ] = useState("");

    const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoInput(e.target.value);
    }

    const handleAddTodo = (): void => {
        store.dispatch(addApiTodo(todoInput));
        setTodoInput("");
    }

    return (
        <div className="mb-3">
            <input
                type="text"
                value={todoInput}
                onChange={handleTodoInputChange}
                className="border text-black border-gray-300 p-2 rounded-md"
            ></input>
            <button
                onClick={handleAddTodo}
                className="bg-blue-500 text-white p-2 m-2 rounded-md ml-2"
            >
                Add
            </button>
        </div>
    )
}