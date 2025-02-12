import { Timer } from '../../App/Timer/timer';
import styles from '../taskCard.module.css';

export function TaskCard() {
    return (
        <div className={styles['task-card']}>
            <h1>Вынести мусор</h1>
            <Timer />
        </div>
    );
}