import React from 'react'
import './main.scss'

export default function Nav() {
	return (
    <nav id="Nav">
      <ul>
        <div className="left">
          <li> <div className="icon"></div></li>
        </div>
        <div className="right">
          <li className="center"> <a href="#About">About</a> </li>
          <li className="center"> <a href="#Projects">Projects</a> </li>
          <li className="center"> <a href="#Contact">Contact</a> </li>
        </div>
      </ul>
    </nav>
  );
}
