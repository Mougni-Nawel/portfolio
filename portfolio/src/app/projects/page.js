'use client'
import React from 'react';
import Project from '../../components/Project'; // Import the Project component
import projectsData from '../../data/projects.json'; // Import your project data

const ProjectsPage = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const project = projectsData.find(project => project.id === parseInt(id));

  return (
    <div>
      {project && <Project {...project} />}
    </div>
  );
};

export default ProjectsPage;

