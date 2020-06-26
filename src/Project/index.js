import React, { useRef } from 'react'
import {TweenMax, Power3} from 'gsap'
import Icon  from '../Icon'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import './main.scss';

export default function Project(props) {
	let name = useRef(null)
	let meta = useRef(null)

	const MouseEnterHandler = () => {
    TweenMax.to(name, 0.2, {
      y: -40,
    });
    TweenMax.to(meta, 0.1, {
      opacity: 1,
      delay: 0.1,
      ease: Power3.easeIn,
    });
  };
	
	const MouseLeaveHandler = () => {
		TweenMax.to(meta, 0.1, {
      opacity: 0,
    });
		TweenMax.to(name, 0.2, {
			y: 0
    });
	}

	return (
		<div className="Project" style={{ "backgroundImage": `url(${props.background})` }} onMouseEnter={MouseEnterHandler} onMouseLeave={MouseLeaveHandler}>
			<div className="overlay"></div>
			<h2 className="name" ref={el => name = el}>{props.name}</h2>

			<div className="meta" ref={el => meta = el}>
				<h4 className="description">{props.description}</h4>

				<div className="icons">
					{props.repo && <Icon icon={faGithubSquare} link={props.repo} large />}
					{props.link && <Icon icon={faExternalLinkSquareAlt} link={props.link} large />}
				</div>
			</div>
		</div>
	)
}