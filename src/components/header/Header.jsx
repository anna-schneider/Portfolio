import React from "react"

import "./Header.css"

export default function Header(props) {
	return (
		<>
			<div className={`${props.className} header`}>
				<header className="name typewriter-anime">ANNA SCHNEIDER</header>
				<h2 className="title typewriter-anime2">Full Stack Developer</h2>
			</div>
		</>
	)
}
