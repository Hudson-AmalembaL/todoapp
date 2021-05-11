import TodoItem from './TodoItem'
import {useEffect,useState } from "react";

const TodoList = ({todos}) => {
	const myTodoList = todos.map(todo =>
		(<TodoItem todoName={todo.name} todoCompleted={todo.completed} key={todo.id} />)
	)
	const [items, setItems ] = useState([])
	useEffect( () => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json =>setItems(json))
	})
	return (
		<>
			{myTodoList}
		</>
	)
}

export default TodoList