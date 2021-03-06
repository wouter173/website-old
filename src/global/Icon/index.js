import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./main.scss"

function Wrapper(props) {
	return <a className="icon-a" href={props.url} target="_blank" rel="noopener noreferrer">{props.children}</a> 
}

export default function (props) {

	const content = (
    <FontAwesomeIcon
      icon={props.icon}
      className={`icon ${props.light ? 'light' : ''} ${props.large ? 'large' : ''} ${props.huge ? 'huge' : ''}`}
    />
	);
	
	const result = props.link ? (<Wrapper url={props.link}>{content}</Wrapper>) : content

	return result
}