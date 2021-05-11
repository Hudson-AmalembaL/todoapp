
const TodoItem = ( { todoName, todoCompleted }) => {
	const customStyle = {
		textDecoration: todoCompleted === true ? 'line-through': 'none',
		color: todoCompleted === true ? 'grey': 'green'
	}
	const cardStyle = {
		borderRadius:'15px',
		background:"rgba(204,204,204,0.58)"
	}
	return (
		<div className="card shadow-1 hover-shadow mb-2" style={cardStyle}>
			<div className="card-body">
				<p className="card-text" style={customStyle}>
					{todoName}
				</p>
			</div>
		</div>
	)
}

export default TodoItem