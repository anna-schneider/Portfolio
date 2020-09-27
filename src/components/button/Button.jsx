import React from "react"

import "./Button.css"

export default function Button(props) {
	return (
		<div className="project-btns">
			<button>{props.content}</button>
		</div>
	)
}
