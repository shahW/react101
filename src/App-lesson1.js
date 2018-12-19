import React, { Component } from "react"
import "./scss/App.scss"
import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Footer />
			</div>
		)
	}
}

export default App
