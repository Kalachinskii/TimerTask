import { Failed } from '../../Failed/failed';
import { FormItem } from '../../FormItem/formItem';
import { Success } from '../../Success/success';
import { ActiveTaskCard } from '../../ActiveTaskCard/ActiveTaskCard';
import { TaskList } from '../../TaskList/taskList';
import styles from '../app.module.css';
import { useState } from 'react';



export function App() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      task: item.task,
      time: item.time,
      id: 1
    }]);
  };

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem}/>
      <div className={styles['box']}>
        <TaskList tasks={items}/>
        <ActiveTaskCard />
        <div className={styles['box-suc-fai']}>
          <Success />
          <Failed />
        </div>
      </div>
    </div>
  )
}
