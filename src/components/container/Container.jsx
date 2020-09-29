import React from "react"
import Button from "../button/Button"
import AwesomeSlider from "react-awesome-slider"

import "./Container.css"
import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css"

export default function Container(props) {
	const { description, projectTitle, icons, images = [] } = props

	return (
		<div className="info-container">
			<h2 className="project-title">{projectTitle}</h2>
			<div className="detail-container">
				<div className="detail-container-left">
					<p className="description">{description}</p>
					<h3 className="made-with">Made With</h3>
					<div className="tech-icons">
						{icons.map((icon) => (
							<i className={icon + " tech-icon"}></i>
						))}
					</div>
					<div className="project-btns">
						<Button content="See the Code" link={props.codeLink} />
						<Button content="See the Live Site" link={props.liveLink} />
					</div>
				</div>
				<div className="detail-container-carousel">
					<AwesomeSlider animation="foldOutAnimation">
						{images.map((path) => (
							<div data-src={path} />
						))}
					</AwesomeSlider>
				</div>
			</div>
		</div>
	)
}
