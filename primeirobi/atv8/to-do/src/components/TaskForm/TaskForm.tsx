import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './TaskForm.module.css';

interface TaskFormProps {
    onAddTask: (text: string) => void;
}

export function TaskForm({ onAddTask }: TaskFormProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            onAddTask(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task..."
            />
            <button type="submit" className={styles.button}>
                Add Task
            </button>
        </form>
    );
}