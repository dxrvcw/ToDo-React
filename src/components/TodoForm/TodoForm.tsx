import { useState } from 'react'
import AddIcon from '../../assets/add.svg'
import styles from './TodoForm.module.css'

interface TodoFormProps {
	addTodo: Function
}

export function TodoForm({ addTodo }: TodoFormProps): JSX.Element {
	const [title, setTitle] = useState('')
	const [date, setDate] = useState('')

	function handleSubmit(): void {
		if (!title || !date) return
		addTodo(title, date)
		setDate('')
		setTitle('')
	}

	return (
		<div className={styles.formContainer}>
			<input
				className={styles.input}
				type='text'
				placeholder='Title: '
				value={title}
				onChange={e => setTitle(e.target.value)}
			/>
			<input
				className={styles.input}
				type='date'
				value={date}
				onChange={e => setDate(e.target.value)}
			/>
			<button
				className={styles.button}
				disabled={!title || !date}
				onClick={handleSubmit}
			>
				<img className={styles.icon} src={AddIcon} alt='' />
			</button>
		</div>
	)
}