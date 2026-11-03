import Link from "next/link";
import { profile, projects, roles, skills } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <header className="lede">
        <h1>{profile.name}</h1>
        <p className="role">
          {profile.degree}, {profile.school}. {profile.classYear}.
        </p>
        <p className="pitch">{profile.availability}</p>
        <ul className="links">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <a href={profile.phoneHref}>{profile.phone}</a>
          </li>
          <li>
            <a href={profile.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={profile.github}>GitHub</a>
          </li>
          <li>
            <a href={profile.resume}>Resume</a>
          </li>
        </ul>
      </header>

      <section id="work">
        <h2>Experience</h2>
        {roles.map((role) => (
          <article key={role.slug}>
            <h3>
              <Link href={role.href}>{role.title}</Link>
            </h3>
            <p className="meta">{role.meta}</p>
            <p className="summary">{role.summary}</p>
            <ul className="points">
              {role.home.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="more" href={role.href}>
              What the work was
            </Link>
          </article>
        ))}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {projects.map((project) => (
          <article key={project.slug}>
            <h3>
              <Link href={project.href}>{project.title}</Link>
            </h3>
            <p className="meta">{project.meta}</p>
            <p className="summary">{project.summary}</p>
            <ul className="points">
              {project.home.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="tags">{project.skills.join(" · ")}</p>
            <Link className="more" href={project.href}>
              How it was built
            </Link>
          </article>
        ))}
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <dl className="skills">
          {skills.map((group) => (
            <div key={group.label}>
              <dt>{group.label}</dt>
              <dd>{group.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {" · "}
          <a href={profile.phoneHref}>{profile.phone}</a>
        </p>
        <p className="meta">{profile.school}.</p>
      </section>
    </>
  );
}
