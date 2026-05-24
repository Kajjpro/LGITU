import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className="site-logo" aria-label="LGITU Home">
      <span className="logo-mark">
        <span className="logo-cap" />
        <span className="logo-arrow">↗</span>
      </span>

      <span className="logo-wordmark">
        <span className="logo-name">LGITU</span>
        <span className="logo-tagline">Let&apos;s Go Into Top Universities</span>
      </span>
    </Link>
  );
}