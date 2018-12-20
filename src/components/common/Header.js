import React from "react"
import logo from "../../img/logo.svg"

/** 
 * the CODE below is using the standard way of writing JS function 
 
 
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
*/

/**
 * the CODE can be rewritten in shorter form using the arrow function syntax
 * and still produces the same result as below.
 * Things REMOVED from the standard syntax are:
 * - the word function
 * - the "{}" handlebar
 * - return (but still keeping the opening and closing brackets)
 *
 * */

const Header = () => (
	<header className="header">
		<img src={logo} alt="logo" height="30" />
		<h2>app name</h2>
		<nav>
			<a href="http://google.com">item 1</a>
			<a href="http://google.com">item 2</a>
			<a href="http://google.com">item 3</a>
		</nav>
	</header>
)

export default Header
