import React from 'react';
import Header from '../Header/'
import Sidebar from '../SideBar/'
import About from '../About/';
import Projects from '../Projects/';
import Footer from '../Footer/';

import './main.scss'
import './root.scss'

export default function App() {
	return (
		<div id="App">
			<Sidebar/>
			<Header />
			<About />
			<Projects />
			<Footer />
		</div>
	)
}