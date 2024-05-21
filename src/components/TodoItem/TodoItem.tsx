import { useDispatch } from 'react-redux'
import CloseIcon from '../../assets/close.svg'
import DeleteIcon from '../../assets/delete.svg'
import DoneIcon from '../../assets/done.svg'
import ITodo from '../../interfaces/ITodo'
import { removeTodo, toggleTodo } from '../../store/todoSlice'
import styles from './TodoItem.module.scss'

export function TodoItem({ id, title, date, completed }: ITodo): JSX.Element {
	const dispatch = useDispatch()

	return (
		<div className={`${styles.itemContainer} ${completed && styles.completed}`}>
			<div>
				<p className={styles.title}>{title}</p>
				<p className={styles.date}>To: {date}</p>
			</div>
			<div>
				<button
					className={styles.button}
					onClick={() => dispatch(removeTodo({ id }))}
				>
					<img src={DeleteIcon} alt='' />
				</button>
				<button
					className={styles.button}
					onClick={() => dispatch(toggleTodo({ id }))}
				>
					<img src={completed ? CloseIcon : DoneIcon} alt='' />
				</button>
			</div>
		</div>
	)
}
