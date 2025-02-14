import { Failed } from '../../Failed/failed';
import { FormItem } from '../../FormItem/formItem';
import { Success } from '../../Success/success';
import { ActiveTaskCard } from '../../ActiveTaskCard/ActiveTaskCard';
import { TaskList } from '../../TaskList/taskList';
import styles from '../app.module.css';
import { useEffect, useState } from 'react';




export function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const key = 'data';
    // если нету ключа/данных - создаём хранилище
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify([]));
    }
    // если данные есть - парсим
    const data = JSON.parse(localStorage.getItem(key));
    if (data) {
      setItems(data.map(item => ({
        ...item
      })))
    }

}, []);

  useEffect(() => {
    if (items.length) {
      // добовляем в хранилище данные
      localStorage.setItem('data',JSON.stringify(items));
    }
  }, [items])

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      task: item.task,
      time: item.time,
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  // временно для рефакторинга
  const clearLS = () => {
    localStorage.clear(),
    localStorage.setItem('data', JSON.stringify([]));
  }

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
      {/* очистка ЛС */}
      <button style={{marginTop: '25px'}} onClick={clearLS}>Очистить ЛС</button>
    </div>
  )
}
