import { useState } from 'react';
import { Timer } from './Timer';
import styles from '../activeTaskCard.module.css';

export function ActiveTaskCard({ items, completedTask, failedTask, clouseCard }) {
    const [pause, setPause] = useState(true);

    return (
        <div className={styles['task-card']}>
            {items.active ? (
                <>
                    <h1>
                        {items.task}
                        <i onClick={() => clouseCard('')} className={`${"fa-solid fa-xmark"}`}></i>
                    </h1>
                    <Timer key={items.id} second={items.time} id={items.id} pause={pause} failedTask={failedTask}/>
                    <div className={styles['play-pause']} onClick={() => setPause(!pause)}>
                        {pause ? 
                            <i className="fa-solid fa-play"></i> 
                            : 
                            <i className="fa-solid fa-pause"></i>}
                    </div>
                    <div className={styles['completed']} onClick={() => completedTask(items.id, 'completed')}>
                        <i className="fa-solid fa-check"></i>
                    </div>
                </>
            ) : (
                <>
                    <h1>{"Нет активностей"}</h1>
                </>
            )}
        </div>
    );
}