import React, { useState } from 'react';
import './LatestProject.scss';
import { Link } from 'react-router-dom';
function LatestProject() {
  const [activeTab, setActiveTab] = useState('All');

  // Define the projects array
  const projects = [
    {
      title: 'Host Guru AI',
      image: '/images/portfolio/project1.svg',
      category: 'Artificial Intelligence',
    },
    {
      title: 'Web Development Project',
      image: '/images/portfolio/project2.svg',
      category: 'Web',
    },
    {
      title: 'Software Development Project',
      image: '/images/portfolio/project3.svg',
      category: 'Software',
    },
    {
      title: 'Digital Marketing Campaign',
      image: '/images/portfolio/project4.svg',
      category: 'Digital Marketing',
    },
    {
      title: 'Branding Design Project',
      image: '/images/portfolio/project5.svg',
      category: 'Branding',
    },
    {
      title: 'Hosting Solution',
      image: '/images/portfolio/project6.svg',
      category: 'Hosting',
    },
  ];

  // Filter the projects based on the active tab
  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <React.Fragment>
      <div className="latestProject">
        <div className="container">
          <div className="title" data-aos="fade-up" data-aos-duration="1000">
            <h2>Latest Project</h2>
          </div>

          {/* Tabs for filtering projects */}
          <div className="tabs">
            {['All', 'Artificial Intelligence', 'Web', 'Software', 'Digital Marketing', 'Branding', 'Hosting'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid layout for project items */}
          <div className="parent">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={index % 3 === 0 ? 'div5' : index % 2 === 0 ? 'div6' : 'div7'}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="block">
                  <img src={project.image} alt={project.title} />
                  <p className="heading">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-center" data-aos="fade-up" data-aos-duration="1000">
            <Link to="/contact-us" className="btn-custom">Let's Talk</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LatestProject;
