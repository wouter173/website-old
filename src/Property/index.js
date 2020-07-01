import React from 'react'

export default function Property(props) {
	return (
		<span>
			<strong>{props.k}:</strong> {props.v}<br/>
		</span>
	)
}
