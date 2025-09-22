import type { Task } from '../../types/Task';
import { TaskItem } from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

interface TaskListProps {
    tasks: Task[];
    onCompleteTask: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

export function TaskList({ tasks, onCompleteTask, onDeleteTask }: TaskListProps) {
    return (
        <div className={styles.list}>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onComplete={onCompleteTask}
                    onDelete={onDeleteTask}
                />
            ))}
        </div>
    );
}