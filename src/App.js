import React from "react"

import "./App.css"
import Contact from "./components/contact/Contact"
import Container from "./components/container/Container"
import Header from "./components/header/Header"
import fdesktop from "./assets/images/fortuneDsk.png"
import fmobile from "./assets/images/fortuneMobile.jpg"
import ftablet from "./assets/images/fortuneTablet.jpg"
import bhome from "./assets/images/BGCHome.jpg"
import bmoney from "./assets/images/BGCMoney.jpg"
import bfooter from "./assets/images/BGCFooter.jpg"
import bdonor from "./assets/images/BGCDonor.jpg"
import dhome from "./assets/images/DDHome.jpg"
import dresults1 from "./assets/images/DDResults1.jpg"
import dresults2 from "./assets/images/DDResults2.jpg"
import dresults3 from "./assets/images/DDResults3.jpg"
import rresponsive from "./assets/images/RMResponsive.jpg"
import rcreate from "./assets/images/RMCreate.jpg"
import rreview from "./assets/images/RMReview.jpg"
import rvote from "./assets/images/RMVote.jpg"

const containerData = [
	{
		projectTitle: "Black Girls Code",
		description:
			"A collaboration with a UX design team, our group of four devs assembled a full-stack web app in alignment to the blueprints from our partners.",
		icons: [
			"devicon-mongodb-plain-wordmark colored",
			"devicon-express-original-wordmark",
			"devicon-react-original-wordmark colored",
			"devicon-nodejs-plain-wordmark colored",
			"devicon-git-plain-wordmark colored",
		],
		liveLink: "https://blackgirlscodep3.netlify.app/",
		codeLink: "https://github.com/anna-schneider/Black-Girls-Code-P3",
		images: [bhome, bmoney, bfooter, bdonor],
	},
	{
		projectTitle: "Remote Control",
		description:
			"Remote Control is a remote viewing party app that aids in household harmony, and staying connected. Friends and family can short list movies, and then rank them to decide a winner. After six days and oceans of coffee, Remote Control was built using Rails, PostgreSQL and React on top of some home-spun CSS and JS.",
		icons: [
			"devicon-postgresql-plain-wordmark colored",
			"devicon-rails-plain-wordmark colored",
			"devicon-ruby-plain-wordmark colored",
			"devicon-git-plain-wordmark colored",
			"devicon-react-original-wordmark colored",
		],
		liveLink: "https://remote-control-fullstack.netlify.app/",
		codeLink: "https://github.com/anna-schneider/Remote-Control",
		images: [rresponsive, rreview, rcreate, rvote],
	},
	{
		projectTitle: "Fortunately",
		description:
			"Bringing the boadwalk to your phone (mobile first, right?), Fortunately is a fortune-telling app built with React and a custom API via AirTable.",
		icons: [
			"devicon-javascript-plain colored",
			"devicon-css3-plain-wordmark colored",
			"devicon-html5-plain-wordmark colored",
			"devicon-react-original-wordmark colored",
			"devicon-git-plain-wordmark colored",
		],
		liveLink: "https://fortunately.netlify.app/",
		codeLink: "https://github.com/anna-schneider/Fortunately",
		images: [fdesktop, ftablet, fmobile],
	},
	{
		projectTitle: "Guardian News App",
		description:
			"No libraries, no frameworks, 100% vanilla JavaScript/CSS news widget",
		icons: [
			"devicon-javascript-plain colored",
			"devicon-css3-plain-wordmark colored",
			"devicon-html5-plain-wordmark colored",
			"devicon-jquery-plain-wordmark colored",
			"devicon-git-plain-wordmark colored",
		],
		liveLink: "https://guardian-widget.netlify.app/",
		codeLink: "https://github.com/anna-schneider/Guardian-Widget/tree/main",
		images: [dhome, dresults1, dresults2, dresults3],
	},
]

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

				<div className="top-level-container">
					<h2 className="portfolio">PORTFOLIO</h2>
				</div>
				{containerData.map((data) => (
					<Container {...data} />
				))}
			</div>
		</div>
	)
}

export default App
