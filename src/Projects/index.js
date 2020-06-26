import React from 'react'
import Project from '../Project'
import './main.scss'

export default function Projects() {
	return (
    <section id="Projects">
      <div className="title">Projects</div>
      <div className="divider"></div>

      <div className="projects">
        <Project name="henkie" background="/header.jpg" description="personal website" repo="https://github.com/wouter173/website" link="https://wouterdb.nl"></Project>
        <Project name="henkie" background="/header.jpg" description="personal website" repo="https://github.com/wouter173/website" link="https://wouterdb.nl"></Project>
        <Project name="henkie"></Project>
        <Project name="henkie"></Project>
        <Project name="henkie"></Project>
        <Project name="henkie"></Project>
        <Project name="henkie"></Project>
      </div>
    </section>
  );
}
