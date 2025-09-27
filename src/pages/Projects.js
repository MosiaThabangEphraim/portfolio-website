import React, { useMemo, useState } from 'react';
import './Projects.css';

function Projects() {
  const [ascending, setAscending] = useState(true);

  const projects = useMemo(
    () => [
      {
        title: 'Portfolio Website',
        description:
          'Designed and developed a personal website to showcase my profile, studies, skills, projects, experience, awards, and certificates. Built using HTML, CSS, JavaScript, and React for a responsive and interactive user experience. Implemented features such as smooth navigation, stylish tabs, animations, transitions, and downloadable resources. Optimized layout and design for clarity, accessibility, and professional presentation.',
      },
      {
        title: 'Task Management Application',
        description:
          'Developed a cross-platform (Android, IOS, Windows)  task management application using .NET MAUI and Supabase PostgreSQL for cloud storage. Implemented features for creating, editing, and deleting tasks, setting reminders, participating in task collaborations, and implemented gamification through achievement badges. Optimized user interface for smooth navigation and multi-device access.',
      },
    ],
    []
  );

  const sorted = useMemo(() => {
    const arr = [...projects];
    arr.sort((a, b) => {
      const comp = a.title.localeCompare(b.title);
      return ascending ? comp : -comp;
    });
    return arr;
  }, [projects, ascending]);

  return (
    <div className="projects-container">
      <div className="section-heading"> Projects </div>

      <div className="controls-container">
        <div className="control-group">
          <label> Sort by Title </label>
          <button onClick={() => setAscending(!ascending)}>
            {ascending ? 'Ascending' : 'Descending'}
          </button>
        </div>
      </div>

      <div className="projects-list">
        {sorted.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-title"> {p.title} </div>
            <div className="project-description"> {p.description} </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
