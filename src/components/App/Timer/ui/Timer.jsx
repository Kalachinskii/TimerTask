import { useEffect, useState } from 'react';
import styles from '../timer.module.css';

export function Timer() {
    // время таймера+анимации
    const [time, setTime] = useState(5);

    // таймер
    useEffect(() => {
        if (time <= 0) return;

        let timerId;
        timerId = setTimeout(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000)

        return () => {
            clearTimeout(timerId);
        }
    }, [time]);

    // цветовая схема таймера
    useEffect(() => {
        document.documentElement.style.setProperty('--my-variable', `${time}s`);
    }, [])

    return (
        <div className={styles['timer']}>
            <div className={styles['circle-container']}>
                <div className={styles['circle']}>
                    <svg width={400} height={400}>
                        <defs>
                        <linearGradient id="gradient" x1="10%" y1="0%" x2="100%" y2="100%">
                            <stop offset="20%" className={styles['stop-one']} />
                            <stop offset="80%" className={styles['stop-mid']} />
                        </linearGradient>
                        </defs>
                        <circle cx="200" cy="200" r="100" strokeWidth="8" fill="none" className={styles['progress']}></circle>
                    </svg>
                    <div className={styles['counter']}>00:00:{time}</div>
                </div>
            </div>
        </div>
    )
}
