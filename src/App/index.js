import React from 'react';
import Header from '../Header'
import Nav from '../Nav'
import About from '../About';
import Projects from '../Projects';
import Footer from '../Footer';

import './main.scss'
import './root.scss'

export default function App() {
	return (
		<div id="App">
			<Nav/>
			<Header />
			<About />
			<Projects />
			<Footer />
		</div>
	)
}