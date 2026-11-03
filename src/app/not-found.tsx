import Link from "next/link";

export default function NotFound() {
  return (
    <article className="writeup">
      <h1>Page not found</h1>
      <p className="summary">That address is not on this site.</p>
      <Link className="more" href="/">
        Back home
      </Link>
    </article>
  );
}
