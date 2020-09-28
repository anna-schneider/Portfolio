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
						projectTitle="Dad or Dud?"
						description="Knock, knock. Who's there? It's 'Dad or Dud?', the responsive single page application, leveraged a
		third-party API to provide a gamified dad joke experience"
						icons={[
							"devicon-javascript-plain colored",
							"devicon-html5-plain colored",
							"devicon-css3-plain colored",
							"devicon-jquery-plain colored",
							"devicon-git-plain colored",
						]}
						liveLink=""
						codeLink="https://github.com/anna-schneider/Dad-or-Dud"
					/>
					<Container
						projectTitle="Fortunately"
						description="Bringing the boadwalk to your phone (mobile first, right?), Fortunately is a fortune-telling app built with React and a custom API via AirTable."
						icons={[
							"devicon-javascript-plain colored",
							"devicon-css3-plain colored",
							"devicon-html5-plain colored",
							"devicon-react-original colored",
							"devicon-git-plain colored",
						]}
						liveLink="https://fortunately.netlify.app/"
						codeLink="https://github.com/anna-schneider/Fortunately"
					/>
					<Container
						projectTitle="Black Girls Code"
						description="A collaboration with a UX design team, our group of four devs assembled a full-stack web app in alignment to the blueprints from our partners."
						icons={[
							"devicon-react-original colored",
							"devicon-nodejs-plain colored",
							"devicon-mongodb-plain colored",
							"devicon-express-original",
							"devicon-git-plain colored",
						]}
						liveLink="https://blackgirlscodep3.netlify.app/"
						codeLink="https://github.com/anna-schneider/Black-Girls-Code-P3"
					/>
					<Container
						projectTitle="Remote Control"
						description="Remote Control is a remote viewing party app that aids in household harmony, and staying connected. Friends and family can short list movies, and then rank them to decide a winner.
After six days and oceans of coffee, Remote Control was built using Rails, PostgreSQL and React on top of some home-spun CSS and JS."
						icons={[
							"devicon-postgresql-plain colored",
							"devicon-rails-plain colored",
							"devicon-ruby-plain colored",
							"devicon-git-plain colored",
							"devicon-react-original colored",
						]}
						liveLink="https://remote-control-fullstack.netlify.app/"
						codeLink="https://github.com/anna-schneider/Remote-Control"
					/>
				</div>
			</div>
		</div>
	)
}

export default App
