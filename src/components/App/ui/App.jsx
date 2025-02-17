import { FormItem } from '../../FormItem/formItem';
import { ActiveTaskCard } from '../../ActiveTaskCard/ActiveTaskCard';
import { TaskList } from '../../TaskList/taskList';
import styles from '../app.module.css';
import { useEffect, useState } from 'react';

export function App() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState('');

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
      completed: false,
      failed: false,
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  const deleteTask = (id) => {
    const items = JSON.parse(localStorage.getItem('data')) || [];
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem('data', JSON.stringify(updatedItems));
    // отрисовка
    if (updatedItems) {
      setItems(updatedItems.map(item => ({...item})))}
  }

  const activeTask = (id) => {
    const items = JSON.parse(localStorage.getItem('data')) || [];
    const updatedItems = items.map(({active, ...rest}) => rest);
    const task = updatedItems.find(task => task.id === id);
    task.active = true;
    localStorage.setItem('data', JSON.stringify(updatedItems));
    setActive(task);
  }

  // Выполнено / провалено
  const isTaskCompleted = (id, state) => {
    const items = JSON.parse(localStorage.getItem('data')) || [];
    const task = items.find(task => task.id === id);
    task[state] = !task[state];
    task.active = !task.active;
    localStorage.setItem('data', JSON.stringify(items));
    setItems(items.map(item => ({
      ...item
    })))
    // очистка карточки
    setActive('')
  }

  return (
    <div className={styles['app']}>
      <FormItem addItem={addItem} items={items}/>
      <div className={styles['box']}>
        <TaskList tasks={items} deleteTask={deleteTask} activeTask={activeTask} />
        <ActiveTaskCard items={active} completedTask={isTaskCompleted} failedTask={isTaskCompleted} clouseCard={setActive}/>
      </div>
    </div>
  )
}
