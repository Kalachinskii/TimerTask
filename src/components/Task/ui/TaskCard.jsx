import { useState } from 'react';
import { Timer } from '../../Timer/timer';
import styles from '../taskCard.module.css';

export function TaskCard() {
    const [playPauseStatys, setPlayPauseStatys] = useState(false);

    const togleImg = () => {
        setPlayPauseStatys(!playPauseStatys);
    }

    return (
        <div className={styles['task-card']}>
            <h1>Вынести мусор</h1>
            <Timer stopTime={playPauseStatys}/>
            <div className={styles['btn-card']}>
                <button onClick={togleImg}>
                    {!playPauseStatys && <i class="fa-solid fa-pause"></i>}
                    {playPauseStatys && <i class="fa-solid fa-play"></i>}
                </button>
                {/* <i class="fa-solid fa-medal"></i> */}
            </div>
        </div>
    );
}