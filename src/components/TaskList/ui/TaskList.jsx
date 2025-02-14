import { useState } from 'react';
import styles from '../taskList.module.css';

export function TaskList({tasks}) {
    return (
        <div className={styles['task-list']}>
            <h1>Задачи</h1>
            <div className={styles['tasks']}>
                {tasks.map(el => (
                    <div className={styles["task"]} key={el.id}> 
                        <div className={styles["task-time"]}>
                            <h3>{el.task}</h3>
                            <h5>
                                <span>Время: </span>
                                {new Date(el.time * 1000).toISOString().substr(11, 8)}
                            </h5>
                        </div>
                        <div className={styles["task-btn"]}>
                            <i className="fa-solid fa-pen"></i>
                            <i className="fa-solid fa-trash"></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}