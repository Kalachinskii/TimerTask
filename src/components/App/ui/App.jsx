import { FormItem } from '../../FormItem/formItem';
import { TaskCard } from '../../Task/taskCard';
import styles from '../app.module.css';



export function App() {

  return (
    <div className={styles['app']}>
      <FormItem />
      <div className={styles['box']}>
        <TaskCard />
      </div>
    </div>
  )
}
