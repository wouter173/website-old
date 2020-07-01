import React from 'react'
import './main.scss'

export default function Section(props) {
	return (
    <section id={props.title} className="Section">
      <div className="title">{props.title}</div>
			<div className="divider"></div>


			<div className="content">
				{props.children}
			</div>
    </section>
  );
}
