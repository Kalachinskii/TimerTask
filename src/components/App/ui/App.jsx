import { Failed } from '../../Failed/failed';
import { FormItem } from '../../FormItem/formItem';
import { Success } from '../../Success/success';
import { TaskCard } from '../../Task/taskCard';
import { TaskList } from '../../TaskList/taskList';
import styles from '../app.module.css';



export function App() {

  // задачи
  const data = [{task: 'Вынести мусор', time: '10', id: 1},
      {task: 'Зделать коммит', time: '20', id: 2},
      // {task: 'Поза страуса', time: '40', id: 3},
      // {task: 'Поза', time: '40', id: 4},
      // {task: 'Поза 2', time: '40', id: 5},
      // {task: 'Зделать коммит', time: '750', id: 6},
      // {task: 'Поза страуса', time: '40', id: 7},
      // {task: 'Поза', time: '40', id: 8},
      // {task: 'Поза 2', time: '40', id: 9},
  ]

  return (
    <div className={styles['app']}>
      <FormItem />
      <div className={styles['box']}>
        <TaskList tasks={data}/>
        <TaskCard />
        <div className={styles['box-suc-fai']}>
          <Success />
          <Failed />
        </div>
      </div>
    </div>
  )
}
