import styles from '../formItem.module.css';

export function FormItem() {

    const addTaskItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        console.log(formProps);
    }

    return (
        <>
            <form action="" className={styles['formItem']} onSubmit={addTaskItem}>
                <div className={styles['formInput']}>
                    <input type="text" name='name' placeholder='Введите задачу'/>
                    <input type="text" name='time' placeholder='Введите время в секундах'/>
                </div>
                <button className={styles['btn']}>
                    <i class="fa-solid fa-plus"></i>
                </button>
            </form>
        </>
    )
}
