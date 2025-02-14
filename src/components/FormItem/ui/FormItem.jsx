import { useRef, useState } from 'react';
import styles from '../formItem.module.css';

export function FormItem({addItem}) {
    const [timeError, setTimeError] = useState('');
    const [taskError, setTaskError] = useState('');
    const taskRef = useRef();
    const timeRef = useRef();
    const formRef = useRef();

    const addTaskItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        // обработка значения на пустоту
        const taskValue = formData.get('task');
        if (!taskValue.trim()) {
            setTaskError('Введите задачу');
            focusInput(taskRef);
            return;
        }
        setTaskError('');
        // Обработка времени
        const timeValue = formData.get('time');
        if (!timeValue || isNaN(timeValue) || Number(timeValue) <= 0) {
            setTimeError('Только положительное число.');
            focusInput(timeRef);
            return;
        }
        // обнулить если были до этого ошибки
        setTimeError('');
        // Преобразуем коллекцию в объект
        // [['name', 'Alice'], ['age', 25]];
        // { name: 'Alice', age: 25 }
        const formProps = Object.fromEntries(formData);
        addItem(formProps);
        // очистка формы
        formRef.current.reset();
    }

    const focusInput = (ref) => {
        ref.current.focus();
    }

    return (
        <>
            <div>
                {taskError && <p style={{ color: 'red' }}>{taskError}</p>}
                {timeError && <p style={{ color: 'red' }}>{timeError}</p>}
            </div>
            <form ref={formRef} action="" className={styles['formItem']} onSubmit={addTaskItem}>
                <div className={styles['formInput']}>
                    <input ref={taskRef} type="text" name='task' placeholder='Введите задачу' className={taskError ? styles['error'] : ''} />
                    <input ref={timeRef} type="text" name='time' placeholder='Введите время в секундах' className={timeError ? styles['error'] : ''}/>
                </div>
                <button className={styles['btn']}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </form>
        </>
    )
}
