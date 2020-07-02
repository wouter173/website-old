import React from 'react'

import Section from '../../global/Section'
import Item from '../../global/Item'

import './main.scss'

export default function index() {
	return (
    <Section title="Contact">
      <Item name="mail" desc="wouterdb173@gmail.com" link="mailto:wouterdb173.nl"/>
      <Item name="discord" desc="Wouter's discord" link="https://discord.gg/invite"/>
      <Item name="github" desc="Wouter173" link="https://github.com/wouter173" />
    </Section>
  );
}
