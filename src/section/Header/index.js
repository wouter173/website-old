import React, { useRef, useEffect } from 'react'
import { TimelineMax } from 'gsap'
import { Link } from 'react-scroll'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import Icon from '../../global/Icon';

import './main.scss'

export default function Header() {
  let icon = useRef(null)
  let timeline = new TimelineMax({ repeat: -1, repeatDelay: 1.4 });

  useEffect(() => {
    timeline.to(icon, 0.2, {
        y: -5,
      }).to(icon, 0.2, {
        y: 0,
      }).to(icon, 0.2, {
        y: -5,
      }).to(icon, 0.2, {
        y: 0,
      }) 
  }, [timeline])

	return (
    <header id="Header">
      <div className="hero center">
        <h1>Wouter de Bruijn</h1>
        <h3>Designer, developer.</h3>
      </div>
      <div className="scroll center">
        <Link to="About" smooth={true}>
          <div ref={el => icon = el} onMouseEnter={() => {timeline.pause()}} onMouseLeave={() => {timeline.resume()}}>
            <Icon icon={faAngleDoubleDown} large/>
          </div>
        </Link>
      </div>
    </header>
  );
}