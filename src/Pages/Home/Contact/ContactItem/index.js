import React from 'react'

import Icon from '../../../../global/Icon'

import './main.scss'

export default function index(props) {
	return (
		<a className="Item" href={props.link} target="_blank" rel="noopener noreferrer">
			<Icon icon={props.icon} huge/>
			<h3>{props.name}</h3>
			<p>{props.desc}</p>
		</a>
	)
}