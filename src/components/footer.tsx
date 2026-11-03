import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>{profile.name}</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
    </footer>
  );
}
