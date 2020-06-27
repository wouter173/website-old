import React, { useRef, useEffect } from 'react'
import Icon from '../Icon'
import { TweenMax, Power3, TimelineMax } from 'gsap';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import './main.scss';

export default function Project(props) {
	let name = useRef(null)
	let meta = useRef(null)
	let timeline = new TimelineMax();

	useEffect(() => {
		let nameTween = new TweenMax(name, 0.2, {
			y: -40,
			ease: Power3.easeOut
		})
		
		let metaTween = new TweenMax(meta, 0.1, {
      opacity: 1,
      ease: Power3.easeIn,
		})
		
		timeline.add(nameTween, 0)
		timeline.add(metaTween, 0.1)

		timeline.reverse()
	}, [timeline])

	const MouseEnterHandler = () => {
		timeline.play()
  };
	
	const MouseLeaveHandler = () => {
		timeline.reverse()
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