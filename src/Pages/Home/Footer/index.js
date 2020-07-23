import React from 'react'
import { Link } from 'react-scroll'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

import Icon from '../../../global/Icon'

import './main.scss'
import './responsive.scss'

export default function Footer() {
	return (
    <footer id="Footer">
      <div className="content">
        <div className="logo"></div>
				<div className="links list">
					<h3>Links</h3>
					<Link to="About" smooth={true} offset={-150}>About</Link><br />
					<Link to="Projects" smooth={true} offset={-150}>Projects</Link><br />
					<Link to="Contact" smooth={true} offset={-150}>Contact</Link><br />
				</div>
				<div className="socials list">
					<h3>Socials</h3>
					<a href="https://github.com/wouter173" target="_blank" rel="noopener noreferrer">Github</a><br />
					<a href="mailto:wouterdb173@gmail.com" target="_blank" rel="noopener noreferrer">Mail</a><br />
					<a href="https://discord.gg/NmHAznB" target="_blank" rel="noopener noreferrer">Discord</a><br />
					<a href="https://www.instagram.com/wouter_db_/" target="_blank" rel="noopener noreferrer">Instagram</a><br />
				</div>
				<div className="bottom-text center">
					<p>Made with <Icon icon={faHeart} /> by Wouter de Bruijn</p>
					<p>Copyright Wouter de Bruijn 2020</p>
				</div>
      </div>
    </footer>
  );
}
