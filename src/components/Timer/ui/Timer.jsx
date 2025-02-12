import { useEffect, useState } from 'react';
import styles from '../timer.module.css';
// import '../time.sass';

export function Timer({seconds, id}) {
    // время таймера+анимации
    const [time, setTime] = useState(seconds);
    
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
        document.documentElement.style.setProperty(`--my-variable`, `${time}s`);
        // одиночный вывод, при отслеживании time некоректно работает
        // одиночный вывод для 1 карточки работает хорошо
        // для 2 и более график вырисовываеться по последниму элементу массива т.к. перезаписывает --my-variable
    }, [])

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
                        <circle cx="150" cy="150" r="75" strokeWidth="8" fill="none" className={styles['progress']}></circle>
                    </svg>
                    <div className={styles['counter']}>
                        {time > 0 || <i class="fa-solid fa-face-tired"></i>}
                        {/* вывод 00.00.00 времени, time - в секкундах */}
                        {time > 0 && new Date(time * 1000).toISOString().substr(11, 8)}
                    </div>
                </div>
            </div>
        </div>
    )
}
