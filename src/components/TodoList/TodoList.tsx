import { useEffect, useState } from 'react'
import { TodoForm } from '../TodoForm/TodoForm'
import { TodoItem } from '../TodoItem/TodoItem'
import styles from './TodoList.module.css'

interface ITodo {
	title: string
	date: string
	id: string
	completed: boolean
}

export function TodoList(): JSX.Element {
	const [todos, setTodos] = useState<ITodo[]>([])

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
		if (storedTodos.length > 0) {
			setTodos(storedTodos)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	function toggleTodoItem(id: string): void {
		setTodos(prevTodos =>
			prevTodos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed }
				}
				return item
			})
		)
	}

	function addTodoItem(title: string, date: string): void {
		setTodos(prevTodos => [
			...prevTodos,
			{ title, date, completed: false, id: generateID() },
		])
	}

	function deleteTodoItem(id: string) {
		setTodos(prevTodos => prevTodos.filter(item => item.id !== id))
	}

	return (
		<div className={styles.todoList}>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					{...todo}
					toggleTodoItem={toggleTodoItem}
					deleteTodoItem={deleteTodoItem}
				/>
			))}
			<TodoForm addTodo={addTodoItem} />
		</div>
	)
}

function generateID(): string {
	return Math.random().toString(36).substring(2, 9)
}
