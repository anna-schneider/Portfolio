import React from "react"

import "./App.css"
import Contact from "./components/contact/Contact"
import Container from "./components/container/Container"
import Header from "./components/header/Header"

function App() {
	return (
		<div className="App">
			<div className="landing">
				<Header className={"top-level-container"} />
				<div className="profile-contact-container top-level-container">
					<div className="profile-container">
						<h3 className="profile">PROFILE</h3>
						<p className="brand">
							I’m a software engineer with a background in managing complex,
							multi-unit hospitality ventures. My history in the field of
							training has taught me to approach problem solving with patience
							and flexibility. As an experienced director of property openings
							and transitions, I deliver results on budget and on time. I bring
							with me a consistent track record of delivering frameworks of
							integrity and partnership.
						</p>
					</div>
					<div className="contact-container">
						<h3 className="contact">CONTACT</h3>
						<Contact />
					</div>
				</div>
				{/* <div className="triangle">
					<h2 className="portfolio">Portfolio</h2>
				</div> */}
				<div className="top-level-container">
					<div className="triangle2">
						<h2 className="portfolio">Portfolio</h2>
					</div>
					<Container
						projectTitle="Dad or Dud"
						description="Dad or Dud is a responsive single page application, leveraged a
		third-party API to provide a gamified dad joke experience"
						icons={[
							"devicon-javascript-plain colored",
							"devicon-html5-plain colored",
							"devicon-css3-plain colored",
							"devicon-jquery-plain colored",
							"devicon-git-plain colored",
						]}
					/>
					<Container
						projectTitle="Fortunately"
						description="Dad or Dud is a responsive single page application, leveraged a
				third-party API to provide a gamified dad joke experience"
						icons={[
							"devicon-javascript-plain colored",
							"devicon-css3-plain colored",
							"devicon-html5-plain colored",
							"devicon-react-original colored",
							"devicon-git-plain colored",
						]}
					/>
					<Container
						projectTitle="Black Girls Code"
						description="Dad or Dud is a responsive single page application, leveraged a
	  third-party API to provide a gamified dad joke experience"
						icons={[
							"devicon-react-original colored",
							"devicon-nodejs-plain colored",
							"devicon-mongodb-plain colored",
							"devicon-express-original",
							"devicon-git-plain colored",
						]}
					/>
					<Container
						projectTitle="Remote Control"
						description="Dad or Dud is a responsive single page application, leveraged a
	  third-party API to provide a gamified dad joke experience"
						icons={[
							"devicon-git-plain colored",
							"devicon-rails-plain colored",
							"devicon-ruby-plain colored",
							"devicon-postgresql-plain colored",
							"devicon-react-original colored",
						]}
					/>
				</div>
			</div>
		</div>
	)
}

export default App
