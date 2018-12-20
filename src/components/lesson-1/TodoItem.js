import React from "react"

function TodoItem(x) {
	return (
		<div className="todo-item">
			<label htmlFor={x.id}>
				<input type="checkbox" id={x.id} checked={x.status} />
				{x.text}
			</label>
		</div>
	)
}

export default TodoItem
