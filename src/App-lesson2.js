import React from "react"
import "./scss/App.scss"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import Joke from "./components/lesson-2/Joke"
import jokesData from "./components/lesson-2/JokesData"

/**
 * using the traditional function syntax
 *

	function App() {
		const jokeList = jokesData.map(joke => <Joke key={joke.id} q={joke.q} a={joke.a} />)
		return (
			<div className="App">
				<Header />
				{jokeList}
				<Footer />
			</div>
		)
	}
* 
*/

/**
 * using the arrow function syntax
 */

const App = () => {
	//get the data from JokesData.js ---> populate Joke component with the data
	const jokeList = jokesData.map(joke => <Joke key={joke.id} q={joke.q} a={joke.a} />)

	// the print the data through the return function
	return (
		<div className="App">
			<Header />
			{jokeList}
			<Footer />
		</div>
	)
}

export default App
