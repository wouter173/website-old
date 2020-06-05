import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './main.scss'

export default function Header() {
	return (
    <header id="Header">
      <div className="hero center">
        <h1>Wouter de Bruijn</h1>
        <h3>Designer, developer.</h3>
      </div>
      <div className="scroll center">
        <Link to="About" smooth={true}>
          <FontAwesomeIcon icon="angle-double-down" className="icon" />
        </Link>
      </div>
    </header>
  );
}