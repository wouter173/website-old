import React from 'react'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

import Icon from '../Icon'

import './main.scss'

export default function index(props) {
	return (
		<div className="Item">
			<Icon icon={props.icon} huge dark/>
			<h3><a href={props.link}>{props.name}</a></h3>
			<a href={props.link} target="_blank" rel="noopener noreferrer">{props.desc} <Icon icon={faExternalLinkSquareAlt} dark/></a>
		</div>
	)
}