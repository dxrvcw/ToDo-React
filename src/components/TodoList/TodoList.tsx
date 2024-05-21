import { useSelector } from 'react-redux'
import ITodo from '../../interfaces/ITodo'
import { TodoForm } from '../TodoForm/TodoForm'
import { TodoItem } from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

export function TodoList(): JSX.Element {
	const todos = useSelector(
		(state: { todos: { todos: ITodo[] } }) => state.todos.todos
	)

	return (
		<div className={styles.todoList}>
			{todos.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
			<TodoForm />
		</div>
	)
}
