import React from 'react'
import Icon from '../Icon'
import { Link } from 'react-scroll'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
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
          <Icon icon={faAngleDoubleDown} large/>
        </Link>
      </div>
    </header>
  );
}