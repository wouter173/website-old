import React from 'react'
import { Link } from 'react-scroll';

import './main.scss'

export default function Nav() {
	return (
    <nav id="Nav">
        <div className="left icon"></div>
        <ul className="right">
          <li className="center"> <Link to="About" smooth={true} offset={-150}>About</Link> </li>
          <li className="center"> <Link to="Projects" smooth={true} offset={-150}>Projects</Link></li>
          <li className="center"> <Link to="Contact" smooth={true} offset={-150}>Contact</Link> </li>
        </ul>
    </nav>
  );
}
