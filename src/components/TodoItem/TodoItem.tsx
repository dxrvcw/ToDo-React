import CloseIcon from '../../assets/close.svg'
import DeleteIcon from '../../assets/delete.svg'
import DoneIcon from '../../assets/done.svg'
import styles from './TodoItem.module.css'

interface ITodoItemProps {
	id: string
	title: string
	date: string
	completed: boolean
	toggleTodoItem: Function
	deleteTodoItem: Function
}

export function TodoItem({
	id,
	title,
	date,
	completed,
	toggleTodoItem,
	deleteTodoItem,
}: ITodoItemProps): JSX.Element {
	return (
		<div className={`${styles.itemContainer} ${completed && styles.completed}`}>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.date}>To: {date}</p>
			</div>
			<div>
				<button
					className={`${styles.button}`}
					onClick={() => deleteTodoItem(id)}
				>
					<img src={DeleteIcon} alt='' />
				</button>
				<button
					className={`${styles.button}`}
					onClick={() => toggleTodoItem(id)}
				>
					<img src={completed ? CloseIcon : DoneIcon} alt='' />
				</button>
			</div>
		</div>
	)
}
