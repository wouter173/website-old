import React from 'react'

import Section from '../../global/Section'
import Property from '../../global/Property'

import './main.scss'
import './responsive.scss'

export default function About() {
	return (
    <Section title="About">
      <div className="properties">
        <Property k="Name" v="Wouter de Bruijn" />
        <Property k="Species" v="Developer" />
        <Property k="Origin" v="The Netherlands" />
        <Property k="Habitat" v="The Earth" />
        <Property k="Age" v="16 years" />
        <Property k="Likes" v="Coffee" />
        <Property k="Dislikes" v="Light theme" />
        <Property k="Skillset" v="Humongous" />
      </div>
      <div className="photo">
        <div className="wrapper">
          <div className="image"></div>
        </div>
      </div>
      <div className="story">
        <p>
          Hey I'm Wouter, a web developer from the Netherlands. I am really
          fascinated by the flow of data and the way networking works, so thats
          why I became a self-taught 16 year old web developer. I love building
          stuff on and for the web. Down below is what I made, go take a look!
        </p>
      </div>
      <div className="skills"></div>
    </Section>
  );
}
