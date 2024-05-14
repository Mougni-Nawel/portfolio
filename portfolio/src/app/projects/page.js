'use client';
import React, { useEffect, useState } from 'react';
import Project from '../../components/Project'; // Import the Project component
import projectsData from '../../data/projects.json'; // Import your project data


const ProjectsPage = () => {
  const [id, setId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idFromParams = urlParams.get('id');
    setId(idFromParams);
  }, []);

  const project = projectsData.find(project => project.id === parseInt(id));

  return (
    <div>
      {project && <Project {...project} />}
    </div>
  );
};

export default ProjectsPage;

