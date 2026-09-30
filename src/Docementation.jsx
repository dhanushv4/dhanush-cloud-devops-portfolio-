import { ArrowLeft, ExternalLink, Github } from "lucide-react";

function Documentation({ project, onBack }) {
  return (
    <main className="documentation-page">

      <div className="documentation-container">

        <button
          type="button"
          className="documentation-back"
          onClick={onBack}
        >
          <ArrowLeft size={16} />
          Back to Projects
        </button>

        <div className="documentation-header">

          <span className="documentation-label">
            PROJECT DOCUMENTATION
          </span>

          <h1>{project.title}</h1>

          <p>
            Complete documentation, architecture, implementation details,
            technologies, and project resources.
          </p>

        </div>

        <section className="documentation-card">

          <h2>Project Overview</h2>

          <p>
            {project.description}
          </p>

        </section>

        <section className="documentation-card">

          <h2>Technologies Used</h2>

          <div className="documentation-tech">
            {project.technologies?.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>

        </section>

        <section className="documentation-card">

          <h2>Project Resources</h2>

          <div className="documentation-resources">

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} />
                GitHub Repository
                <ExternalLink size={14} />
              </a>
            )}

            {project.document && (
              <a
                href={project.document}
                target="_blank"
                rel="noopener noreferrer"
              >
                📄
                Open PDF Documentation
                <ExternalLink size={14} />
              </a>
            )}

            {project.youtube && (
              <a
                href={project.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶
                Watch YouTube Demo
                <ExternalLink size={14} />
              </a>
            )}

          </div>

        </section>

      </div>

    </main>
  );
}

export default Documentation;