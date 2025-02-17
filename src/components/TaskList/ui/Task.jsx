import styles from '../taskList.module.css';

export default function Task({activeTask, deleteTask, el}) {
    return (
        <div className={styles["task"]}  key={el.id} onClick={() => activeTask(el.id)}> 
            <div className={styles["task-time"]}>
                <h3>{el.task}</h3>
                <h5>
                    <span>Время: </span>
                    {new Date(el.time * 1000).toISOString().substr(11, 8)}
                </h5>
            </div>
            <div className={styles["task-btn"]}>
                <i className="fa-solid fa-trash" 
                    onClick={(e) => {
                        // Остановить всплытие события (activeTask(el.id) - выдавал error)
                        e.stopPropagation(); 
                        deleteTask(el.id);
                    }}></i>
            </div>
        </div>
    )
}
