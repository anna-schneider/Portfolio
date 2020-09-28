import React from "react"
import Button from "../button/Button"
import AwesomeSlider from "react-awesome-slider"

import "./Container.css"
import "./Carousel/Carousel.css"
// import "../../assets/images"

export default function Container(props) {
	const { description, projectTitle, icons } = props

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
					<AwesomeSlider>
						<div data-src="../../assets/images/fortuneDsk.png" />
						<div data-src="../../assets/images/fortuneIpad.png" />
						<div data-src="../../assets/images/fortuneMobile.png" />
						<div data-src="/path/to/image-3.jpg" />
					</AwesomeSlider>
				</div>
			</div>
		</div>
	)
}
