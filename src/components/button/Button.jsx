import React from "react"

import "./Button.css"

export default function Button(props) {
	return (
		<div className="project-btns">
			<button className="hvr-grow-rotate hvr-grow-rotate-ccw">
				{props.content}
			</button>
		</div>
	)
}
