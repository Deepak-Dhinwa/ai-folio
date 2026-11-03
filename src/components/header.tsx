import Link from "next/link";
import { nav, profile } from "@/lib/content";

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          <span className="mark" aria-hidden="true">
            D
          </span>
          {profile.name}
        </Link>
        <nav className="nav" aria-label="Page">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
