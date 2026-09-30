function ProjectCard({
  project,
  darkMode,
  index,
  onOpen,
}) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="project-card">
      {/* TOP GLOW LINE */}
      <div className="project-top-line" />

      <div className="project-card-content">

        {/* =========================
            TOP
        ========================== */}
        <div className="project-card-top">
          <span className="project-number">
            {number}
          </span>

          <span className="project-category">
            CLOUD & DEVOPS
          </span>
        </div>

        {/* =========================
            TITLE
        ========================== */}
        <h3 className="project-title">
          {project.title}
        </h3>

        {/* =========================
            DESCRIPTION
        ========================== */}
        <p className="project-description">
          {project.description
            ?.trim()
            .split("\n\n")[0]
            .replace(/\s+/g, " ")}
        </p>

        {/* =========================
            TECHNOLOGIES
        ========================== */}
        {project.technologies?.length > 0 && (
          <div className="project-technologies">
            {project.technologies.slice(0, 5).map((technology) => (
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
        )}

        {/* =========================
            FOOTER
        ========================== */}
        <div className="project-card-footer">

          {/* EXPLORE PROJECT */}
          <button
            type="button"
            onClick={onOpen}
            className="explore-project"
          >
            Explore Project
            <span>→</span>
          </button>

          {/* =========================
              PROJECT LINKS
          ========================== */}
          <div className="project-links">

            {/* GITHUB */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="project-link project-github"
                aria-label="Open GitHub repository"
              >
                <span>GitHub</span>
                <span>↗</span>
              </a>
            )}

            {/* DOCUMENTATION PAGE / PDF */}
            {project.document && (
              <a
                href={project.document}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="project-link project-doc"
                aria-label="View project documentation"
              >
                <span>📄 View Documentation</span>
                <span>↗</span>
              </a>
            )}

            {/* YOUTUBE VIDEO */}
            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
                className="project-link project-demo"
                aria-label="Watch project video on YouTube"
              >
                <span>▶ Watch Video</span>
                <span>↗</span>
              </a>
            )}

          </div>
        </div>

      </div>
    </article>
  );
}

export default ProjectCard;