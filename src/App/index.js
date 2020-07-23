import React from 'react'
import {Switch, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import Error from '../Pages/Error'

import './main.scss'
import './root.scss'

export default function App() {
	return (
    <div id="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route component={Error} />
      </Switch>
    </div>
  );
}