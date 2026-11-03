import Link from "next/link";
import { profile, projects, roles, skills } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="kicker">
            {profile.school} · {profile.classYear}
          </p>
          <h1>{profile.name}</h1>
          <p className="degree">{profile.degree}</p>
          <p className="pitch">{profile.availability}</p>
          <div className="actions">
            <a className="btn btn-primary" href={profile.resume}>
              Resume
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              Email
            </a>
            <a className="btn" href={profile.phoneHref}>
              {profile.phone}
            </a>
            <a className="btn" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="btn" href={profile.github}>
              GitHub
            </a>
          </div>
        </div>
        <figure className="portrait">
          <img
            src="/portrait.jpg"
            alt="Deepak Dhinwa"
            width={840}
            height={1050}
          />
        </figure>
      </section>

      <section id="skills">
        <h2 className="section-label">Skills</h2>
        <p className="section-intro">
          The work below sits on these. Models when the question is a prediction, and the systems that keep a run from living in a notebook.
        </p>
        <div className="skill-grid">
          {skills.map((group) => (
            <article className="card" key={group.label}>
              <h3>{group.label}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work">
        <h2 className="section-label">Experience</h2>
        <p className="section-intro">
          One internship, four threads: how the product is used, who is about to leave, which photo belongs on a hotel, and how a discount should be tested.
        </p>
        <div className="stack">
          {roles.map((role) => (
            <article className="card" key={role.slug}>
              <h3>
                <Link href={role.href}>{role.title}</Link>
              </h3>
              <p className="meta">{role.meta}</p>
              <p className="summary">{role.summary}</p>
              <ul className="stats">
                {role.stats.map((stat) => (
                  <li key={stat.label}>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="points">
                {role.home.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Link className="more" href={role.href}>
                The write-up
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 className="section-label">Projects</h2>
        <p className="section-intro">
          Each one is a system with a reason for its shape, and a number that says what that shape changed.
        </p>
        <div className="stack">
          {projects.map((project) => (
            <article className="card" key={project.slug}>
              <h3>
                <Link href={project.href}>{project.title}</Link>
              </h3>
              <p className="meta">{project.meta}</p>
              <p className="summary">{project.summary}</p>
              <ul className="stats">
                {project.stats.map((stat) => (
                  <li key={stat.label}>
                    <b>{stat.value}</b>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
              <ul className="points">
                {project.home.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="chips">
                {project.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
              <Link className="more" href={project.href}>
                The write-up
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section id="contact">
        <h2 className="section-label">Contact</h2>
        <div className="card contact-card">
          <div>
            <p className="contact-title">Write or call.</p>
            <p>{profile.school}.</p>
          </div>
          <div className="contact-links">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
