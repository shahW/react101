import React from "react"
import "./scss/App.scss"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import todoData from "./components/lesson-1/todoData"
import TodoItem from "./components/lesson-1/TodoItem"

/**
 * using the arrow function syntax
 */

const App = () => {
	//get the data from todoData.js ---> populate todoItem component with the data through XX
	const todoList = todoData.map(xx => <TodoItem key={xx.id} id={xx.id} text={xx.text} status={xx.completed} />)
	// the print the data through the return function
	return (
		<div className="App">
			<Header />
			{todoList}
			<Footer />
		</div>
	)
}

export default App
