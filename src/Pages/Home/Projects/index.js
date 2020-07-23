import React, {useState, useEffect} from 'react'

import Section from '../../../global/Section'
import Project from '../../../global/Project'

import './main.scss'
import './responsive.scss'

export default function Projects() {
  const [projects, setProjects] = useState([{}, {}, {}, {}, {}, {}]);
  const URL = process.env.NODE_ENV === 'development'? 'http://localhost:9000/.netlify/functions/projects' : '/.netlify/functions/projects'


  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, [URL]);

	return (
    <Section title="Projects">
      {projects.map(project => {
        return <Project
          key={project._id}
          name={project.name}
          background={project.background}
          description={project.description}
          repo={project.github}
          link={project.link}
        />
      })}
    </Section>
  );
}
