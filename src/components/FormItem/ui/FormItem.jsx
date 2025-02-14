import styles from '../formItem.module.css';

export function FormItem({addItem}) {

    const addTaskItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        addItem(formProps);
    }

    return (
        <>
            <form action="" className={styles['formItem']} onSubmit={addTaskItem}>
                <div className={styles['formInput']}>
                    <input type="text" name='task' placeholder='Введите задачу'/>
                    <input type="text" name='time' placeholder='Введите время в секундах'/>
                </div>
                <button className={styles['btn']}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
        </>
    )
}
