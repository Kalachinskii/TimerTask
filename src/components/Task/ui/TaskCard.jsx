import { useState } from 'react';
import { Timer } from '../../Timer/timer';
import styles from '../taskCard.module.css';

export function TaskCard() {
    const [playPauseStatys, setPlayPauseStatys] = useState(false);

    const togleImg = () => {
        setPlayPauseStatys(!playPauseStatys);
    }

    // задачи
    const data = [{task: 'Вынести мусор', time: '10', id: 1},
        {task: 'Зделать коммит', time: '20', id: 2},
        // {task: 'Поза страуса', time: '40', id: 3},
        // {task: 'Поза', time: '40', id: 4},
        // {task: 'Поза 2', time: '40', id: 5},
        // {task: 'Зделать коммит', time: '750', id: 6},
        // {task: 'Поза страуса', time: '40', id: 7},
        // {task: 'Поза', time: '40', id: 8},
        // {task: 'Поза 2', time: '40', id: 9},
    ]

    return (
        data.map(el => (
            <div key={el.id} className={styles['task-card']}>
            <h1>{el.task}</h1>
            <Timer stopTime={playPauseStatys} seconds={el.time} id={el.id}/>
            <div className={styles['btn-card']}>
                <button onClick={togleImg}>
                    {!playPauseStatys && <i className="fa-solid fa-pause"></i>}
                    {playPauseStatys && <i className="fa-solid fa-play"></i>}
                </button>
                {/* <i class="fa-solid fa-medal"></i> */}
            </div>
        </div>
        ))
    );
}