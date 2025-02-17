import styles from '../taskList.module.css';

export default function BtnList({tasks, setBtnState}) {
    const btns = ["Задачи", "Выполено", "Провалено"];

    const btnsOut = btns.map((el, ind) => (
        <div key={ind} onClick={() => setBtnState(ind)} className={styles['btn-task', 'btn-box']}>
        {ind == 0 && <span className={styles['count1']}>{el}: {tasks.filter(task => !task.failed && !task.completed).length}</span>}
        {ind == 1 && <span className={styles['count2']}>{el}: {tasks.filter(task => task.completed).length}</span>}
        {ind == 2 && <span className={styles['count3']}>{el}: {tasks.filter(task => task.failed).length}</span>}
    </div>
    ));

    return (
        <div className={styles['btn-list']}>
            {btnsOut}
        </div>
    )
}
