import React from "react"

import "./Button.css"

export default function Button(props) {
	const { link, content } = props

	return (
		<a href={link} className="button hvr-grow-rotate hvr-grow-rotate-ccw">
			{content}
		</a>
	)
}
