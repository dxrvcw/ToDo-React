import styles from './App.module.scss'
import { TodoList } from './components/TodoList/TodoList'

export default function App() {
	return (
		<div className={styles.appContainer}>
			<p className={styles.title}>ToDo list</p>
			<TodoList />
		</div>
	)
}
