// ============================================================
// Icônes ligne (style Feather, cohérent avec ContactModal) pour
// les réseaux sociaux + badge vérifié bleu de la carte de liens.
// ============================================================

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 3c0 2.9 2.3 5.2 5.2 5.2" />
      <path d="M16 3v11.5a4.2 4.2 0 1 1-4.2-4.2c.28 0 .55.02.82.07" />
      <path d="M21.2 8.2v3.6a8.7 8.7 0 0 1-5.2-1.73" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function ScaleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3v18" />
      <path d="M5 8l-3 6a3.5 3.5 0 0 0 6 0z" />
      <path d="M19 8l-3 6a3.5 3.5 0 0 0 6 0z" />
      <path d="M5 8h14" />
      <path d="M9 21h6" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2 4 5v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V5z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  );
}

export function VerifiedBadge({ size = 16, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="10" fill="#3B82F6" />
      <path d="M6.5 11.3l2.7 2.7 6-6.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
