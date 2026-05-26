import Link from "next/link";

export default function SiteLogo() {
  return (
    <Link href="/" className="site-logo" aria-label="LGITU Home">
      <span className="logo-mark">
        <svg className="logo-cap-svg" viewBox="0 0 512 512" width="26" height="26" aria-hidden="true">
          <path d="M256 148 L404 205 L256 262 L108 205 Z" fill="#fff" />
          <path d="M186 233 L186 282 C186 311 223 326 256 326 C289 326 326 311 326 282 L326 233 L256 262 Z" fill="#fff" fillOpacity="0.88" />
          <circle cx="256" cy="205" r="13" fill="#4338CA" />
          <path d="M404 205 L404 305" stroke="#FBBF24" strokeWidth="11" strokeLinecap="round" fill="none" />
          <circle cx="404" cy="324" r="17" fill="#FBBF24" />
        </svg>
      </span>

      <span className="logo-wordmark">
        <span className="logo-name">LGITU</span>
        <span className="logo-tagline">Let&apos;s Go Into Top Universities</span>
      </span>
    </Link>
  );
}