import React from 'react'

import projects from "../../projects.json";

function Design() {
    return (
        <article>
            {projects.map(project => (
                <section key={project.id}>
                    <img src={project.picture} />
                    <p>{project.description}</p>
                    <div>
                    <a href={project.url} alt={project.title} >
                        <button aria-label={`See the demo of ${project.title}`}>Demo</button>
                    </a>
                    <a href={project.code} alt={project.titles} >
                        <button aria-label={`See the code for ${project.title}`}>Code</button>
                    </a>
                    </div>
                </section>
            ))}
        </article>
    )
}

export default Design
