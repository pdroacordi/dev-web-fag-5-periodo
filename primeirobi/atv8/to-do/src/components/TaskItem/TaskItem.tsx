import type { Task } from '../../types/Task';
import styles from './TaskItem.module.css';

interface TaskItemProps {
    task: Task;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TaskItem({ task, onComplete, onDelete }: TaskItemProps) {
    return (
        <div className={styles.item}>
            <span
                className={`${styles.text} ${task.completed ? styles.completed : ''}`}
                onClick={() => onComplete(task.id)}
            >
                {task.text}
            </span>
            <button
                className={styles.deleteButton}
                onClick={() => onDelete(task.id)}
                title="Delete task"
            >
                ×
            </button>
        </div>
    );
}