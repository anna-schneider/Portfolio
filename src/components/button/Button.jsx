import React from "react"

import "./Button.css"

export default function Button(props) {
	return (
		<a href={props.link} className="hvr-grow-rotate hvr-grow-rotate-ccw">
			{props.content}
		</a>
	)
}
