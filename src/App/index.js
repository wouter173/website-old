import React from 'react'
import Header from '../section/Header'
import Nav from '../section/Nav'
import About from '../section/About'
import Projects from '../section/Projects'
import Contact from '../section/Contact'
import Footer from '../section/Footer'

import './main.scss'
import './root.scss'

export default function App() {
	return (
		<div id="App">
			<Nav/>
			<Header />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	)
}