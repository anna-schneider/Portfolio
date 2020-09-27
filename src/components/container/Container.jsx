import React from "react"
import Button from "../button/Button"

import "./Container.css"

export default function Container(props) {
	const { description, projectTitle } = props

	return (
		<div className="info-container">
			<h2 className="project-title">{props.projectTitle}</h2>
			<p className="description">{props.description}</p>
			<h3>Made With</h3>
			<Button content="See the Code" />
			<Button content="See the Live Site" />
			<div className="project-container"></div>
		</div>
	)
}
