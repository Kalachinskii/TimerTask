import { useState } from 'react';
import { Timer } from '../../Timer/timer';
import styles from '../activeTaskCard.module.css';

export function ActiveTaskCard({items}) {
    const [pause, setPause] = useState(false);
    
    return (
        <div className={styles['task-card']}>
            {items ? (
                <>
                    <h1>{items.task}</h1>
                    <Timer key={items.id} second={items.time} activeTask={items} pause={pause}/>
                    <button onClick={() => setPause(!pause)}>
                        {pause ? 'запуск' : 'пауза'}
                    </button>
                </>
            ) : (
                <>
                    <h1>{"Нет активностей"}</h1>
                    <Timer second={0} />
                </>
            )}
        </div>
    );
}