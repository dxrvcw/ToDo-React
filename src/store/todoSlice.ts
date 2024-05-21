import { createSlice } from '@reduxjs/toolkit'
import ITodo from '../interfaces/ITodo'
import { generateID } from '../utils/utils'

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: <ITodo[]>JSON.parse(localStorage.getItem('todos') || '[]'),
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push({
				id: generateID(),
				date: action.payload.date,
				title: action.payload.title,
				completed: false,
			})
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
		toggleTodo(state, action) {
			const todo = state.todos.find(todo => todo.id === action.payload.id)
			if (todo) {
				todo.completed = !todo.completed
			}
			localStorage.setItem('todos', JSON.stringify(state.todos))
		},
	},
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
