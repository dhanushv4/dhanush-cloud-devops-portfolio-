function ProjectCard({
  project,
  darkMode,
  index,
  onOpen,
}) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article className="project-card">

      <div className="project-top-line" />

      <div className="project-card-content">

        <div className="project-card-top">

          <span className="project-number">
            {number}
          </span>

          <span className="project-category">
            Full Stack
          </span>

        </div>


        <h3 className="project-title">
          {project.title}
        </h3>


        <p className="project-description">
          {project.description
            .trim()
            .split("\n\n")[0]
            .replace(/\s+/g, " ")}
        </p>


        <div className="project-technologies">

          {project.technologies
            .slice(0, 5)
            .map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}

          {project.technologies.length > 5 && (
            <span>
              +{project.technologies.length - 5}
            </span>
          )}

        </div>


        <div className="project-card-footer">

          <button
            type="button"
            onClick={onOpen}
            className="explore-project"
          >
            Explore project →
          </button>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={(event) =>
              event.stopPropagation()
            }
            className="project-github"
          >
            GitHub ↗
          </a>

        </div>

      </div>

    </article>
  )
}

export default ProjectCard