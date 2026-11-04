import Link from "next/link";

export function Brand({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="brand" aria-label="ORBYT home" style={dark ? { color: "#101820" } : undefined}>
      <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="13.2" stroke="currentColor" strokeWidth="3.2" />
        <ellipse cx="20" cy="20" rx="7.4" ry="16.4" stroke="currentColor" strokeWidth="1.4" transform="rotate(43 20 20)" />
        <circle cx="31.4" cy="8.7" r="3.1" fill="currentColor" />
      </svg>
      <span>ORBYT</span>
    </Link>
  );
}
