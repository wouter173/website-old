import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./main.scss"

function Wrapper(props) {
	return <a href={props.url} target="_blank" rel="noopener noreferrer">{props.children}</a> 
}

export default function (props) {

	const content = (
    <FontAwesomeIcon
      icon={props.icon}
      className={`icon ${props.dark ? 'dark' : ''} ${props.large ? 'large' : ''}`}
    />
	);
	
	const result = props.link ? (<Wrapper url={props.link}>{content}</Wrapper>) : content

	return result
}