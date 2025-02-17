import { useState } from 'react';
import styles from '../taskList.module.css';

export function TaskList({tasks, deleteTask, activeTask}) {
    const [btnState, setBtnState] = useState(0);
    const [activeTaskId, setActiveTaskId] = useState(null);
    
    return (
        <div className={styles['task-list']}>
            <div className={styles['btn-list']}>
                <div onClick={() => setBtnState(0)} className={styles['btn-task', 'btn-box']}>
                    <div className={styles['quantity']}>
                        <span>16</span>
                    </div>
                    <p>Задачи</p>
                </div>
                <div onClick={() => setBtnState(1)} className={styles['btn-success', 'btn-box']}>
                    <div className={styles['quantity']}>
                        <span>6</span>
                    </div>
                    <p>Выполено</p>
                </div>
                <div onClick={() => setBtnState(2)} className={styles['btn-failed', 'btn-box']}>
                    <div className={styles['quantity']}>
                        <span>6</span>
                    </div>
                    <p>Провалено</p>
                </div>
            </div>
            <div className={styles['tasks']}>
                {/* Активные */}
                {btnState === 0 && tasks.map(el => !el.failed && !el.completed && (
                    <div className={`${styles["task"]} ${el.id === activeTaskId ? styles["active"] : ""}`}  key={el.id} onClick={() => {activeTask(el.id); setActiveTaskId(el.id)}}> 
                        <div className={styles["task-time"]}>
                            <h3>{el.task}</h3>
                            <h5>
                                <span>Время: </span>
                                {new Date(el.time * 1000).toISOString().substr(11, 8)}
                            </h5>
                        </div>
                        <div className={styles["task-btn"]}>
                            <i className="fa-solid fa-trash" onClick={() => deleteTask(el.id)}></i>
                        </div>
                    </div>
                ))}
                {/* Выполненые */}
                {btnState === 1 && tasks.map(el => el.completed && (
                    <div className={styles["task"]} key={el.id} > 
                        <div className={styles["task-time"]}>
                            <h3>{el.task}</h3>
                            <h5>
                                <span>Время: </span>
                                {new Date(el.time * 1000).toISOString().substr(11, 8)}
                            </h5>
                        </div>
                        <div className={styles["task-btn"]}>
                            <i className="fa-solid fa-trash" onClick={() => deleteTask(el.id)}></i>
                        </div>
                    </div>
                ))}
                {/* Проваленные */}
                {btnState === 2 && tasks.map(el => el.failed && (
                    <div className={styles["task"]} key={el.id} > 
                        <div className={styles["task-time"]}>
                            <h3>{el.task}</h3>
                            <h5>
                                <span>Время: </span>
                                {new Date(el.time * 1000).toISOString().substr(11, 8)}
                            </h5>
                        </div>
                        <div className={styles["task-btn"]}>
                            {/* <i className="fa-solid fa-reply" onClick={() => replaceTask(el.id)}></i> */}
                            <i className="fa-solid fa-trash" onClick={() => deleteTask(el.id)}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
