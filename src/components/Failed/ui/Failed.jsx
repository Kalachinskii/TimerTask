import styles from '../failed.module.css';

export function Failed() {

    return (
        <div className={styles['task-list']}>
            <h1>Провалено</h1>
        </div>
    );
}