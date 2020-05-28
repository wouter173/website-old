import React from 'react';
import Header from '../Header/'
import Sidebar from '../SideBar/'

import './main.scss'

export default function Main() {
	return (
		<div id="Main">
			<Sidebar/>
			<Header/>
		</div>
	)
}