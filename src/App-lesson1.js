import React, { Component } from "react"
import "./scss/App.scss"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"
import ContentLesson1 from "./components/content-lesson-1"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ContentLesson1 />
				<Footer />
			</div>
		)
	}
}

export default App
