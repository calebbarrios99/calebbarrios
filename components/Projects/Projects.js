import React from "react";
import { Icon } from "semantic-ui-react";

const projects = [
  {
    title: "Portfolio Personal",
    description:
      "Sitio web personal construido con Next.js, React y Semantic UI. Responsive y con animaciones CSS.",
    tags: ["Next.js", "React", "SCSS"],
    github: "https://github.com/calebbarrios99/calebbarrios",
    demo: "/",
    color: "#0066ff",
  },
  {
    title: "Proyecto React Native",
    description:
      "Aplicación móvil desarrollada con React Native. Interfaz intuitiva y conectada a una API REST.",
    tags: ["React Native", "JavaScript", "API"],
    github: "https://github.com/calebbarrios99",
    demo: null,
    color: "#011935",
  },
  {
    title: "App Web con Next.js",
    description:
      "Aplicación web completa con rutas dinámicas, consumo de API y estilos modernos con SCSS.",
    tags: ["Next.js", "SCSS", "REST API"],
    github: "https://github.com/calebbarrios99",
    demo: null,
    color: "#0066ff",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects_title">Mis Proyectos</h2>
      <div className="projects_grid">
        {projects.map((project) => (
          <div className="projects_card" key={project.title}>
            <div
              className="projects_card_header"
              style={{ background: project.color }}
            >
              <Icon name="code" size="huge" inverted />
            </div>
            <div className="projects_card_content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="projects_card_tags">
                {project.tags.map((tag) => (
                  <span className="projects_card_tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="projects_card_links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="projects_card_btn projects_card_btn--outline"
              >
                <Icon name="github" /> GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  className="projects_card_btn projects_card_btn--filled"
                >
                  <Icon name="external alternate" /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
