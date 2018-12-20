import React from "react"

/**
 * 
 * @param {props} x 
 * 

function Joke(x) {
	return (
		<div style={{ borderBottom: "1px solid" }}>
			<h4 style={{ display: !x.q && "none" }}>Question: {x.q}</h4>
			<h2 style={{ color: !x.q && "#888888" }}>{x.a}</h2>
		</div>
	)
}

*
* my attempt to make the conditional logic more apparent
* works BUT made the code looks alot longer

function Joke(x) {
	if (x.q) {
		return (
			<div className="joke">
				<h4>{x.q}</h4>
				<h2>{x.a}</h2>
			</div>
		)
	} else {
		return (
			<div className="joke">
				<h2 className="noQ">{x.a}</h2>
			</div>
		)
	}
}
*/

const Joke = x => (
	//check if there's question if not then apply special class
	<div className="joke">
		<h4 className={!x.q && "blank"}>Question:{x.q}</h4>
		<h2 className={!x.q && "noQ"}> {x.a}</h2>
	</div>
)

export default Joke
