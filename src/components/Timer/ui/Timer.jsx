import { useEffect, useState } from 'react';
import styles from '../timer.module.css';
// import '../time.sass';

export function Timer({second, pause, id, failedTask}) {
    const [time, setTime] = useState(second);
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Таймер
    useEffect(() => {
        if (time < 0) return;
        if (time === 0) {
            failedTask(id);
        };

        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        // пауза / запуск - баг с милисекундами и анимацией
        if (pause) clearInterval(timerId);

        return () => {
            clearInterval(timerId);
        };
    }, [time, pause]);

    // с ключём не актуально
    useEffect(() => {
        // Устанавливаем новое значение времени, если поступило новое значение second
        setTime(second);
    }, [second]); // Это будет срабатывать при изменении second

    // Цветовая схема таймера
    useEffect(() => {
        document.documentElement.style.setProperty(`--my-variable`, `${second}s`);
        resetAnimation(); // Сброс анимации при изменении second
    }, [second]);

    const resetAnimation = () => {
        setIsAnimating(false); // Сброс анимации
        setTimeout(() => {
            setIsAnimating(true); // Запуск анимации снова
        }, 20); // Небольшая задержка для перерисовки
    };

    return (
        <div className={styles['timer']}>
            <div className={styles['circle-container']}>
                <div className={styles['circle']}>
                    <svg width={300} height={300}>
                        <defs>
                            <linearGradient id="gradient" x1="10%" y1="0%" x2="100%" y2="100%">
                                <stop offset="20%" className={styles['stop-one']} />
                                <stop offset="80%" className={styles['stop-mid']} />
                            </linearGradient>
                        </defs>
                        <circle
                            cx="150"
                            cy="150"
                            r="75"
                            strokeWidth="8"
                            fill="none"
                            className={`${styles['progress']} ${isAnimating ? styles['animate'] : ''} ${pause ? styles['paused'] : ''}`}
                        />
                    </svg>
                    <div className={styles['counter']}>
                        {time > 0 && new Date(time * 1000).toISOString().substr(11, 8)}
                    </div>
                </div>
            </div>
        </div>
    )
}
