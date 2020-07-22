import React from 'react'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Icon from '../../global/Icon';

import './main.scss'

export default function index() {
	return (
    <div id="Error">
      <div className="wrapper">
				<div className="logo"></div>
				<div className="divider"></div>
        <h1>404 Page not found</h1>
        <Link to="/"> <Icon icon={ faArrowLeft } /> Back to home.</Link>
      </div>
    </div>
  );
}
