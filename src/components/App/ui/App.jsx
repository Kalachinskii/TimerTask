import { FormItem } from '../../FormItem/formItem';
import styles from '../app.module.css';



export function App() {

  return (
    <div className={styles['app']}>
      <h1>App</h1>
      <FormItem />
    </div>
  )
}
