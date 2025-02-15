import styles from '../success.module.css';

export function Success({tasks, deleteTask}) {

    return (
        <div className={styles['task-list']}>
            <h1>Выполнено</h1>

            <div className={styles['tasks']}>
                {tasks.map(el => el.completed && (
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
            </div>
        </div>
    );
}