import React from 'react'
import { faGithubSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Section from '../../global/Section'
import Item from '../../global/ContactItem'

import './main.scss'
import './responsive.scss'

export default function index() {
	return (
    <Section title="Contact">
      <Item name="Mail" desc="wouterdb173@gmail.com" link="mailto:wouterdb173@gmail.com" icon={faEnvelope} />
      <Item name="Discord" desc="Wouter's discord" link="https://discord.gg/NmHAznB" icon={faDiscord}/>
      <Item name="Github" desc="Wouter173" link="https://github.com/wouter173" icon={faGithubSquare}/>
    </Section>
  );
}
