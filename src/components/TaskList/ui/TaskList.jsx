import styles from '../taskList.module.css';

export function TaskList({tasks, deleteTask, activeTask}) {
    return (
        <div className={styles['task-list']}>
            <div className={styles['btn-list']}>
                <div className={styles['btn-task', 'btn-box']}>
                    <div className={styles['quantity']}>
                        <span>16</span>
                    </div>
                    <p>Задачи</p>
                </div>
                <div className={styles['btn-success', 'btn-box']}>
                    <div className={styles['quantity']}>
                        <span>6</span>
                    </div>
                    <p>Выполено</p>
                </div>
                <div className={styles['btn-failed', 'btn-box']}>
                    <div className={styles['quantity']}>
                        <span>6</span>
                    </div>
                    <p>Провалено</p>
                </div>
            </div>
            
            <div className={styles['tasks']}>
                {tasks.map(el => !el.failed && !el.completed && (
                    <div className={styles["task"]} key={el.id} onClick={() => activeTask(el.id)}> 
                        <div className={styles["task-time"]}>
                            <h3>{el.task}</h3>
                            <h5>
                                <span>Время: </span>
                                {new Date(el.time * 1000).toISOString().substr(11, 8)}
                            </h5>
                        </div>
                        <div className={styles["task-btn"]}>
                            <i className="fa-solid fa-pen"></i>
                            <i className="fa-solid fa-trash" onClick={() => deleteTask(el.id)}></i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}