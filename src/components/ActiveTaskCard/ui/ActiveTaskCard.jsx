import { useState } from 'react';
import { Timer } from '../../Timer/timer';
import styles from '../activeTaskCard.module.css';

export function ActiveTaskCard() {
    const [playPauseStatys, setPlayPauseStatys] = useState(false);

    const togleImg = () => {
        setPlayPauseStatys(!playPauseStatys);
    }

    return (
        <div className={styles['task-card']}>
            <h1>{'Вынести мусор'}</h1>
            <Timer stopTime={playPauseStatys} seconds={4}/>
            <div className={styles['btn-card']}>
                <button onClick={togleImg}>
                    {!playPauseStatys && <i className="fa-solid fa-pause"></i>}
                    {playPauseStatys && <i className="fa-solid fa-play"></i>}
                </button>
            </div>
        </div>
    );
}