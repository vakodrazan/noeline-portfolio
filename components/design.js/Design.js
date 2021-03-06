import React from 'react'

import "./design.scss"

import projects from "../../projects.json";

function Design() {
    return (
        <article className="design">
            {projects.map(project => (
                <section key={project.id} className="design-items">
                    <img src={project.picture} />
                    <p>{project.description}</p>
                    <div className="buttons">
                        <a href={project.url} alt={project.title} target="_blank" >
                            <button className="demo" aria-label={`See the demo of ${project.title}`}>Demo</button>
                        </a>
                        <a href={project.code} alt={project.titles} target="_blank" >
                            <button className="code" aria-label={`See the code for ${project.title}`}>Code</button>
                        </a>
                    </div>
                </section>
            ))}
        </article>
    )
}

export default Design
