import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>{profile.name}</span>
        <span>
          <a href={profile.linkedin}>LinkedIn</a>
          {" · "}
          <a href={profile.github}>GitHub</a>
          {" · "}
          <a href={`mailto:${profile.email}`}>Email</a>
        </span>
      </div>
    </footer>
  );
}
