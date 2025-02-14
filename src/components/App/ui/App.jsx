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
    // если данные есть - вытаскиваем
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

  const deleteTask = (id) => {
    // Получаем текущие элементы из localStorage
    const items = JSON.parse(localStorage.getItem('data')) || [];
    // Фильтруем элементы, исключая тот, который нужно удалить
    const updatedItems = items.filter(item => item.id !== id);
    // Сохраняем обновленный массив обратно в localStorage
    localStorage.setItem('data', JSON.stringify(updatedItems));
    // отрисовка
    if (updatedItems) {
      setItems(updatedItems.map(item => ({...item})))}
  }

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem}/>
      <div className={styles['box']}>
        <TaskList tasks={items} deleteTask={deleteTask}/>
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
