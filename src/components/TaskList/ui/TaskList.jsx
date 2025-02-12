import { useState } from 'react';
import styles from '../taskList.module.css';

export function TaskList({tasks}) {
    const [tasksArr, setArrTasks] = useState(tasks);

    return (
        <div className={styles['task-list']}>
            <h1>Задачи</h1>
            <ul>
                {tasksArr.map(el => (
                    <li key={el.id}>{el.task}</li>
                ))}
            </ul>
        </div>
    );
}