import React from "react"
import logo from "../../img/logo.svg"

function Header() {
	return (
		<header className="header">
			<img src={logo} alt="logo" height="30" />
			<h2>app name</h2>
			<nav>
				<a href="#">item 1</a>
				<a href="#">item 2</a>
				<a href="#">item 3</a>
			</nav>
		</header>
	)
}

export default Header
