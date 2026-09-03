import { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactModal from './ContactModal';
import LinkListModal from './LinkListModal';
import { TikTokIcon, InstagramIcon, LinkedInIcon, FacebookIcon, ScaleIcon, ShieldIcon } from './icons/SocialIcons';
import styles from '../styles/HomeBottomNav.module.css';

const SOCIAL_LINKS = [
  { label: 'TikTok',    href: 'https://www.tiktok.com/@atlamaz.studio', external: true, verified: true, icon: <TikTokIcon /> },
  { label: 'Instagram', href: 'https://www.instagram.com/atlamazstudio/', external: true, verified: true, icon: <InstagramIcon /> },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/company/atlamaz-studio', external: true, verified: true, icon: <LinkedInIcon /> },
  { label: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61591312926571', external: true, verified: true, icon: <FacebookIcon /> },
];

export default function HomeBottomNav({ t }) {
  const [contactOpen, setContactOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);

  const legalLinks = [
    { label: t.homeNav.privacyPolicy, href: '/politique-confidentialite', icon: <ShieldIcon /> },
    { label: t.homeNav.legalNotice,   href: '/mentions-legales',          icon: <ScaleIcon /> },
  ];

  return (
    <>
      <nav className={styles.nav} aria-label="Navigation rapide">
        <button type="button" className={styles.link} onClick={() => setSocialOpen(true)}>
          {t.homeNav.reseauxSociaux}
        </button>
        <Link to="/services" className={styles.link}>{t.homeNav.services}</Link>
        <button type="button" className={styles.link} onClick={() => setLegalOpen(true)}>
          {t.homeNav.legal}
        </button>
        <button type="button" className={styles.cta} onClick={() => setContactOpen(true)}>
          {t.navbar.cta}
        </button>
      </nav>

      <LinkListModal
        isOpen={socialOpen}
        onClose={() => setSocialOpen(false)}
        title={t.homeNav.reseauxSociauxTitle}
        items={SOCIAL_LINKS}
      />
      <LinkListModal
        isOpen={legalOpen}
        onClose={() => setLegalOpen(false)}
        title={t.homeNav.legalTitle}
        items={legalLinks}
      />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}
