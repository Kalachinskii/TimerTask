import { useState } from 'react';
import styles from '../taskList.module.css';
import BtnList from './BtnList';
import Task from './Task';

export function TaskList({tasks, deleteTask, activeTask, restoreTask, active}) {
    const [btnState, setBtnState] = useState(0);

    return (
        <div className={`${styles['task-list']} ${active ? styles['no-active'] : styles['active']}`}>
            <BtnList tasks={tasks} setBtnState={setBtnState}/>
            <div className={styles['tasks']}>
                {/* Активные */}
                {btnState === 0 && tasks.map(el => !el.failed && !el.completed && (
                    <Task key={el.id} activeTask={activeTask} deleteTask={deleteTask} el={el}/>
                ))}
                {/* Выполненые */}
                {btnState === 1 && tasks.map(el => el.completed && (
                    <Task key={el.id} deleteTask={deleteTask} el={el} />
                ))}
                {/* Проваленные */}
                {btnState === 2 && tasks.map(el => el.failed && (
                    <Task key={el.id} deleteTask={deleteTask} el={el} restoreTask={restoreTask}/>
                ))}
            </div>
        </div>
    );
}
