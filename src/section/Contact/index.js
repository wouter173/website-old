import React from 'react'
import { faGithubSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Section from '../../global/Section'
import Item from '../../global/Item'

import './main.scss'
import './responsive.scss'

export default function index() {
	return (
    <Section title="Contact">
      <Item name="mail" desc="wouterdb173@gmail.com" link="mailto:wouterdb173.nl" icon={faEnvelope} />
      <Item name="discord" desc="Wouter's discord" link="https://discord.gg/invite" icon={faDiscord}/>
      <Item name="github" desc="Wouter173" link="https://github.com/wouter173" icon={faGithubSquare}/>
    </Section>
  );
}
