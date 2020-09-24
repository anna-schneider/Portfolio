import React from "react"

import "./App.css"
import Header from "./components/header/Header"

function App() {
	return (
		<div className="App">
			<Header />
			<div className="profile-contact-container">
				<div className="profile-container">
					<h3 className="profile">PROFILE</h3>
					<p>
						I’m a software engineer with a background in managing complex,
						multi-unit hospitality ventures. My history in the field of training
						has taught me to approach problem solving with patience and
						flexibility. As an experienced director of property openings and
						transitions, I deliver results on budget and on time. I bring with
						me a consistent track record of delivering frameworks of integrity
						and partnership.
					</p>
				</div>
				<div className="contact-container">
					<h3 className="contact">CONTACT</h3>
				</div>
			</div>
		</div>
	)
}

export default App
