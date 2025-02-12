import styles from '../formItem.module.css';

export function FormItem() {
    return (
        <>
            <form action="" className={styles['formItem']}>
                <div className={styles['formInput']}>
                    <input type="text" name='task-name' placeholder='Введите задачу'/>
                    <input type="text" name='task-time' placeholder='Введите время в минутах'/>
                </div>
                <button type="button" className={styles['btn']}>
                    <i class="fa-solid fa-plus"></i>
                </button>
            </form>
        </>
    )
}
