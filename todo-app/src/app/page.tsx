'use client';
import { TodoHome } from '@/app/pages/todoHome';
import { Provider } from 'react-redux';
import store from '@/app/store';

export default function Home() {
    return (
        <Provider store={store}>
            <main className="flex min-h-screen flex-col items-center p-24">
                <TodoHome />
            </main>
        </Provider>

    );
}
