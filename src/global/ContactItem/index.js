import React from 'react'

import Icon from '../Icon'

import './main.scss'

export default function index(props) {
	return (
		<div className="Item">
			<Icon icon={props.icon} huge/>
			<h3><a href={props.link}>{props.name} </a></h3>
			<a className="desc" href={props.link} target="_blank" rel="noopener noreferrer">{props.desc}</a>
		</div>
	)
}