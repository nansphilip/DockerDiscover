import { ChangeEvent, useState } from 'react';
import { Todo } from '@/app/interfaces/todo';
import { editApiTodo, deleteApiTodo } from '@/app/todoSlice';
import store from '@/app/store';

interface TodoItemProps {
    todoParam: Todo;
}
export function TodoItem({ todoParam }: TodoItemProps) {
    const [
        isEdit,
        setIsEdit
    ] = useState(false);

    const [
        editInput,
        setEditInput
    ] = useState(todoParam.title);

    const handleSwitchEdit = () => setIsEdit(!isEdit);
    const handleEditInputChange = (e: ChangeEvent<HTMLInputElement>) => setEditInput(e.target.value);

    const handleCancelEdit = () => {
        setEditInput(todoParam.title);
        setIsEdit(false);
    }

    const handleConfirmEdit = () => {
        store.dispatch(editApiTodo({
            ...todoParam,
            title: editInput
        }));
        setIsEdit(false);
    }

    const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
        store.dispatch(editApiTodo({
            ...todoParam,
            checked: e.target.checked
        }));
    }

    const handleDelete = () => {
        store.dispatch(deleteApiTodo(todoParam.id));
    }

    if (isEdit) {
        return (
            <div>
                <input
                    type="text"
                    value={editInput}
                    onChange={handleEditInputChange}
                    className="border text-black border-gray-300 p-2 rounded-md"
                />
                <button
                    onClick={handleConfirmEdit}
                    className="bg-blue-500 text-white p-2 rounded-md ml-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                </button>
                <button
                    onClick={handleCancelEdit}
                    className="bg-red-500 text-white p-2 m-2 rounded-md ml-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        )
    }

    return (
        <div className="flex items-center">
            <input
                type='checkbox'
                checked={todoParam.checked}
                onChange={handleCheckChange}
                className="mr-2"
            />
            <span onClick={handleSwitchEdit} className="flex-grow cursor-pointer">
                {todoParam.title}
            </span>
            <button
                onClick={handleDelete}
                className="text-red-500 p-1 rounded-md hover:bg-red-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </button>
        </div>
    )
}