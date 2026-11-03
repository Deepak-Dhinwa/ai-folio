import Link from "next/link";
import type { Writeup } from "@/lib/content";

export function WriteupPage({ item }: { item: Writeup }) {
  return (
    <article className="writeup">
      <Link className="back" href={item.back}>
        Back
      </Link>
      <h1>{item.title}</h1>
      <p className="meta">{item.meta}</p>
      <p className="summary">{item.summary}</p>
      {item.links.length > 0 ? (
        <ul className="outlinks">
          {item.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="tags">{item.skills.join(" · ")}</p>
      {item.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? (
            <ul className="points">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </article>
  );
}
