import React from "react"

import "./Contact.css"

export default function Contact(props) {
	return (
		<div>
			<div className="icon-stack">
				<div className="icon-stack1">
					<a
						href="https://github.com/anna-schneider"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-github fa-4x" aria-hidden="true"></i>
					</a>
					<a
						href="https://www.linkedin.com/in/anna-schneider-0a0772113/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-linkedin-square fa-4x " aria-hidden="true"></i>
					</a>
				</div>

				<div className="icon-stack2">
					<a
						href="https://drive.google.com/file/d/115rg_xE2UgKpgFQYJr83wqNlpg68kP9j/view?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-file fa-3x" aria-hidden="true"></i>
					</a>
					<a
						href="mailto: anna.schneiderm@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fa fa-envelope fa-3x " aria-hidden="true"></i>
					</a>
				</div>
			</div>
		</div>
	)
}
