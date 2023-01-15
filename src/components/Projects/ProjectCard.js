import React from 'react'


function ProjectCard({ project }) {
    return (

        <div className="card col-3 m-3 p-0 " >
            <img src={project.Preview} classNameName="card-img-top col-12" alt={project.Title} />
            <div className="card-body">
                <h4 className="card-title">{project.Title}</h4>
                <p className="card-text">{project.Desc}</p>
                <a href={project.Demo} className="btn " target="_blank" rel="noreferrer">Live Demo</a>
            </div>
        </div>


    )
}

export default ProjectCard
