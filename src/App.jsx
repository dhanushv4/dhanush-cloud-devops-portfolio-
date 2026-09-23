import { useEffect, useState } from "react";
import profile from "./data/profile";
import "./App.css";

const navigation = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["certifications", "Certifications"],
  ["contact", "Contact"],
];

const skillGroups = [
  {
    title: "Cloud",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS VPC",
      "CloudWatch",
      "AWS CLI",
    ],
  },
  {
    title: "DevOps",
    items: [
      "Git",
      "GitHub",
      "Jenkins",
      "CI/CD",
      "Argo CD",
      "GitOps",
      "Bash",
    ],
  },
  {
    title: "Containers",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Minikube",
      "Ingress",
    ],
  },
  {
    title: "Infrastructure",
    items: [
      "Terraform",
      "Ansible",
      "NGINX",
      "Linux",
      "Ubuntu",
      "HTTP/HTTPS",
    ],
  },
  {
    title: "Programming",
    items: [
      "Python",
      "Flask",
      "SQL",
      "MySQL",
      "JavaScript",
      "Shell Scripting",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);
  const [copied, setCopied] = useState(false);

  /* =========================
     ACTIVE NAVIGATION
  ========================= */

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) =>
      observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================
     REVEAL ANIMATION
  ========================= */

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".reveal, .reveal-section"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, []);

  /* =========================
     ESCAPE KEY
  ========================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  /* =========================
     LOCK BODY WHEN MODAL OPEN
  ========================= */

  useEffect(() => {
    document.body.style.overflow = selectedProject
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  /* =========================
     SCROLL
  ========================= */

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================
     COPY EMAIL
  ========================= */

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        profile.email
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="app">

      {/* =========================
          HEADER
      ========================= */}

      <header className="site-header">
        <div className="container header-inner">

          <button
            className="brand"
            onClick={() =>
              scrollToSection("home")
            }
            aria-label="Go to home"
          >
            <span className="brand-mark">
              DV
            </span>

            <span className="brand-name">
              Dhanush V
            </span>
          </button>

          <nav
            className={`desktop-nav ${
              menuOpen ? "mobile-open" : ""
            }`}
          >
            {navigation.map(([id, label]) => (
              <button
                key={id}
                className={
                  activeSection === id
                    ? "nav-link active"
                    : "nav-link"
                }
                onClick={() =>
                  scrollToSection(id)
                }
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            className={`menu-button ${
              menuOpen ? "open" : ""
            }`}
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

        </div>
      </header>

      <main>

        {/* =========================
            HOME
        ========================= */}

        <section
          id="home"
          className="hero section"
        >

          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="container hero-grid">

            <div className="hero-content reveal visible">

              <p className="eyebrow">
                <span className="eyebrow-line" />
                CLOUD & DEVOPS ENGINEER
              </p>

              <h1>
                Building
                <br />
                <span>cloud infrastructure</span>
                <br />
                that scales.
              </h1>

              <p className="hero-description">
                I’m Dhanush V, an MCA graduate focused on
                AWS, Linux, Docker, Kubernetes, Terraform,
                CI/CD, GitOps and cloud infrastructure
                automation.
              </p>

              <div className="hero-actions">

                <button
                  className="button button-primary"
                  onClick={() =>
                    scrollToSection("projects")
                  }
                >
                  View My Projects
                  <span>↗</span>
                </button>

                <a
                  className="button button-outline"
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>

              </div>

              <div className="hero-meta">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
                </a>

                <button onClick={copyEmail}>
                  {copied
                    ? "Email Copied ✓"
                    : "Email ↗"}
                </button>

              </div>

            </div>

            {/* =========================
                UPDATED CLOUD IMAGE
            ========================= */}

            <div className="hero-visual reveal visible">

              <div className="photo-frame">

                <div className="photo-number">
                  DEVOPS
                </div>

                <img
                  src="/images/cloud.jpg"
                  alt="Cloud & DevOps Infrastructure"
                  className="profile-image"
                />

                <div className="photo-caption">
                  <span>
                    AWS • K8S • TERRAFORM
                  </span>

                  <span>
                    SRE
                  </span>
                </div>

              </div>

              <div className="hero-floating-card">

                <span className="status-dot" />

                <div>
                  <strong>
                    Open to opportunities
                  </strong>

                  <small>
                    Cloud / DevOps / SRE
                  </small>
                </div>

              </div>

            </div>

          </div>

          <button
            className="scroll-indicator"
            onClick={() =>
              scrollToSection("about")
            }
          >
            <span>
              SCROLL TO EXPLORE
            </span>

            <span className="scroll-arrow">
              ↓
            </span>
          </button>

        </section>

        {/* =========================
            ABOUT
        ========================= */}

        <section
          id="about"
          className="section about-section reveal-section"
        >
          <div className="container">

            <div className="section-heading reveal">

              <span className="section-number">
                ◈
              </span>

              <div>
                <p className="section-kicker">
                  ABOUT ME
                </p>

                <h2>
                  Cloud & DevOps focused.
                </h2>
              </div>

            </div>

            <div className="about-grid">

              <div className="about-intro reveal">

                <p className="large-text">
                  MCA graduate focused on building,
                  deploying and automating cloud
                  infrastructure.
                </p>

                <p>
                  I have hands-on experience with AWS,
                  Linux, Docker, Kubernetes, Terraform,
                  Ansible, Jenkins, Argo CD, NGINX and
                  Bash through practical Cloud & DevOps
                  training and projects.
                </p>

                <p>
                  My interests include infrastructure
                  automation, containerization, CI/CD,
                  GitOps, monitoring, troubleshooting and
                  reliable cloud deployments.
                </p>

              </div>

              <div className="about-details reveal">

                <div className="detail-row">
                  <span>Location</span>
                  <strong>
                    Bengaluru, India
                  </strong>
                </div>

                <div className="detail-row">
                  <span>Education</span>
                  <strong>
                    MCA
                  </strong>
                </div>

                <div className="detail-row">
                  <span>Focus</span>
                  <strong>
                    Cloud & DevOps
                  </strong>
                </div>

                <div className="detail-row">
                  <span>Cloud</span>
                  <strong>
                    AWS
                  </strong>
                </div>

                <div className="detail-row">
                  <span>Specialization</span>
                  <strong>
                    Kubernetes / IaC / CI/CD
                  </strong>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* =========================
            SKILLS
        ========================= */}

        <section
          id="skills"
          className="section skills-section reveal-section"
        >
          <div className="container">

            <div className="section-heading reveal">

              <span className="section-number">
                ◈
              </span>

              <div>
                <p className="section-kicker">
                  TECHNICAL TOOLKIT
                </p>

                <h2>
                  Cloud & DevOps stack.
                </h2>
              </div>

            </div>

            <div className="skills-layout">

              <div className="skills-statement reveal">

                <p>
                  Technologies I use to provision,
                  automate, deploy, monitor and
                  troubleshoot cloud infrastructure.
                </p>

                <div className="skills-focus">

                  <span>
                    PRIMARY FOCUS
                  </span>

                  <strong>
                    AWS + Kubernetes + Terraform
                  </strong>

                </div>

              </div>

              <div className="skills-grid">

                {skillGroups.map(
                  (group, index) => (
                    <div
                      className="skill-card reveal"
                      key={group.title}
                      style={{
                        transitionDelay:
                          `${index * 60}ms`,
                      }}
                    >

                      <div className="skill-card-header">

                        <span>
                          {group.title === "Cloud"
                            ? "☁"
                            : group.title === "DevOps"
                            ? "⚙"
                            : group.title === "Containers"
                            ? "◫"
                            : group.title === "Infrastructure"
                            ? "⌁"
                            : "⌘"}
                        </span>

                        <h3>
                          {group.title}
                        </h3>

                      </div>

                      <div className="skill-tags">

                        {group.items.map(
                          (skill) => (
                            <span key={skill}>
                              {skill}
                            </span>
                          )
                        )}

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>
        </section>

        {/* =========================
            PROJECTS
        ========================= */}

        <section
          id="projects"
          className="section projects-section reveal-section"
        >
          <div className="container">

            <div className="section-heading reveal">

              <span className="section-number">
                ◈
              </span>

              <div>

                <p className="section-kicker">
                  SELECTED WORK
                </p>

                <h2>
                  Cloud & DevOps projects.
                </h2>

              </div>

            </div>

            <div className="projects-intro reveal">

              <p>
                Practical projects demonstrating cloud
                infrastructure, automation, containers,
                monitoring, Terraform and Ansible.
              </p>

              <span>
                02 PROJECTS
              </span>

            </div>

            <div className="projects-list">

              {profile.projects.map(
                (project, index) => (

                  <article
                    className="project-item reveal"
                    key={project.title}
                    onClick={() =>
                      setSelectedProject(project)
                    }
                    tabIndex="0"
                    role="button"
                    onKeyDown={(event) => {

                      if (
                        event.key === "Enter" ||
                        event.key === " "
                      ) {
                        setSelectedProject(project);
                      }

                    }}
                  >

                    <div className="project-index">
                      {index === 0
                        ? "AWS"
                        : "IAC"}
                    </div>

                    <div className="project-main">

                      <div className="project-heading">

                        <h3>
                          {project.title}
                        </h3>

                        <span className="project-arrow">
                          ↗
                        </span>

                      </div>

                      <p>
                        {project.description
                          .trim()
                          .split("\n")[0]}
                      </p>

                      <div className="project-tech">

                        {project.technologies
                          .slice(0, 6)
                          .map(
                            (technology) => (
                              <span
                                key={technology}
                              >
                                {technology}
                              </span>
                            )
                          )}

                      </div>

                    </div>

                    <div className="project-action">
                      <span>
                        VIEW DETAILS
                      </span>
                    </div>

                  </article>

                )
              )}

            </div>

          </div>
        </section>

        {/* =========================
            EXPERIENCE
        ========================= */}

        <section
          id="experience"
          className="section experience-section reveal-section"
        >
          <div className="container">

            <div className="section-heading reveal">

              <span className="section-number">
                ◈
              </span>

              <div>

                <p className="section-kicker">
                  MY JOURNEY
                </p>

                <h2>
                  Training & education.
                </h2>

              </div>

            </div>

            <div className="timeline">

              <article className="timeline-item reveal">

                <div className="timeline-date">
                  2026
                </div>

                <div className="timeline-content">

                  <span className="timeline-type">
                    CLOUD & DEVOPS TRAINING
                  </span>

                  <h3>
                    Cloud & DevOps Training
                  </h3>

                  <h4>
                    ACTE · Bengaluru
                  </h4>

                  <ul>
                    {profile.experience
                      .slice(1)
                      .map((item) => (
                        <li key={item}>
                          {item}
                        </li>
                      ))}
                  </ul>

                </div>

              </article>

              {profile.education.map(
                (education) => (

                  <article
                    className="timeline-item reveal"
                    key={education.degree}
                  >

                    <div className="timeline-date">
                      {education.period}
                    </div>

                    <div className="timeline-content">

                      <span className="timeline-type">
                        EDUCATION
                      </span>

                      <h3>
                        {education.degree}
                      </h3>

                      <h4>
                        {education.college} ·{" "}
                        {education.location}
                      </h4>

                      <p className="education-result">
                        CGPA{" "}
                        <strong>
                          {education.cgpa}
                        </strong>
                      </p>

                    </div>

                  </article>

                )
              )}

            </div>

          </div>
        </section>

        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <section
          id="certifications"
          className="section certifications-section reveal-section"
        >
          <div className="container">

            <div className="section-heading reveal">

              <span className="section-number">
                ◈
              </span>

              <div>

                <p className="section-kicker">
                  LEARNING
                </p>

                <h2>
                  Training & certification.
                </h2>

              </div>

            </div>

            <div className="certification-list">

              {profile.certifications.map(
                (certificate) => (

                  <div
                    className="certificate reveal"
                    key={certificate}
                  >

                    <span>
                      ✓
                    </span>

                    <p>
                      {certificate}
                    </p>

                    <span className="certificate-arrow">
                      ↗
                    </span>

                  </div>

                )
              )}

            </div>

          </div>
        </section>

        {/* =========================
            CONTACT
        ========================= */}

        <section
          id="contact"
          className="section contact-section reveal-section"
        >
          <div className="container">

            <div className="contact-box reveal">

              <div className="contact-number">
                //
              </div>

              <p className="section-kicker">
                LET'S CONNECT
              </p>

              <h2>
                Looking for a
                <br />
                <span>
                  Cloud / DevOps opportunity?
                </span>
              </h2>

              <p className="contact-description">
                I’m currently seeking entry-level
                opportunities where I can contribute
                to cloud infrastructure, automation,
                CI/CD, Kubernetes and DevOps workflows.
              </p>

              <div className="contact-actions">

                <button
                  className="button button-primary"
                  onClick={copyEmail}
                >
                  {copied
                    ? "Email Copied ✓"
                    : "Copy Email"}
                </button>

                <a
                  className="button button-outline"
                  href={`mailto:${profile.email}`}
                >
                  Send Email ↗
                </a>

              </div>

              <div className="contact-links">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                  <span>↗</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                  <span>↗</span>
                </a>

                <a
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                  <span>↗</span>
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>

      {/* =========================
          FOOTER
      ========================= */}

      <footer className="site-footer">

        <div className="container footer-inner">

          <div>

            <strong>
              Dhanush V
            </strong>

            <span>
              Cloud & DevOps Engineer
            </span>

          </div>

          <p>
            © {new Date().getFullYear()} Dhanush V
          </p>

          <button
            onClick={() =>
              scrollToSection("home")
            }
          >
            BACK TO TOP ↑
          </button>

        </div>

      </footer>

      {/* =========================
          PROJECT MODAL
      ========================= */}

      {selectedProject && (

        <div
          className="modal-backdrop"
          onClick={() =>
            setSelectedProject(null)
          }
        >

          <div
            className="project-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() =>
                setSelectedProject(null)
              }
              aria-label="Close project"
            >
              ×
            </button>

            <span className="modal-label">
              PROJECT DETAILS
            </span>

            <h2>
              {selectedProject.title}
            </h2>

            <div className="modal-divider" />

            <p className="modal-description">
              {selectedProject.description}
            </p>

            <div className="modal-tech">

              {selectedProject.technologies.map(
                (technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                )
              )}

            </div>

            <div className="modal-actions">

              <a
                className="button button-primary"
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub ↗
              </a>

              {selectedProject.youtube && (
                <a
                  className="button button-outline"
                  href={selectedProject.youtube}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch Demo ↗
                </a>
              )}

              <button
                className="button button-outline"
                onClick={() =>
                  setSelectedProject(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;