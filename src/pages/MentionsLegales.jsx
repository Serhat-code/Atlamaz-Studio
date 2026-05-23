import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../styles/LegalPage.module.css';

export default function MentionsLegales() {
  return (
    <>
      <Helmet>
        <title>Mentions légales — Atlamaz Studio</title>
        <meta name="description" content="Mentions légales du site Atlamaz Studio, studio de création web à Lyon." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.backLink}>← Retour à l'accueil</Link>

          <h1 className={styles.pageTitle}>Mentions légales</h1>
          <p className={styles.updated}>Dernière mise à jour : mai 2026</p>

          {/* ── Éditeur ────────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Éditeur du site</h2>
            <p>Le site <strong>atlamazstudio.fr</strong> est édité par :</p>
            <ul className={styles.list}>
              <li><strong>Nom :</strong> Serhat Atlamaz</li>
              <li><strong>Enseigne :</strong> Atlamaz Studio</li>
              <li><strong>Statut :</strong> Micro-entreprise</li>
              <li><strong>SIRET :</strong> [À COMPLÉTER]</li>
              <li><strong>Adresse :</strong> Lyon, France</li>
              <li><strong>Email :</strong> <a href="mailto:atlamazstudio@gmail.com" className={styles.link}>atlamazstudio@gmail.com</a></li>
            </ul>
          </section>

          {/* ── Hébergeur ──────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Hébergeur</h2>
            <ul className={styles.list}>
              <li><strong>Raison sociale :</strong> Vercel Inc.</li>
              <li><strong>Adresse :</strong> 340 Pine Street, Suite 1501, San Francisco, CA 94104, USA</li>
              <li><strong>Site :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.link}>vercel.com</a></li>
            </ul>
          </section>

          {/* ── Propriété intellectuelle ───────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, code source)
              sont la propriété exclusive d'Atlamaz Studio, sauf mention contraire. Toute reproduction,
              distribution, modification ou utilisation commerciale sans autorisation écrite préalable est
              strictement interdite.
            </p>
          </section>

          {/* ── Limitation de responsabilité ───────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Limitation de responsabilité</h2>
            <p>
              Atlamaz Studio s'efforce de maintenir les informations publiées sur ce site à jour et exactes.
              Toutefois, il ne peut être tenu responsable des erreurs, omissions ou résultats qui pourraient
              être obtenus par une mauvaise utilisation de ces informations. Les liens hypertextes présents
              sur ce site peuvent renvoyer vers des sites tiers ; Atlamaz Studio n'est pas responsable du
              contenu de ces sites.
            </p>
          </section>

          {/* ── Données personnelles ────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Protection des données personnelles</h2>
            <p>
              Les données collectées via le formulaire de contact sont traitées dans le respect du
              Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679).
              Pour en savoir plus, consultez notre{' '}
              <Link to="/politique-confidentialite" className={styles.link}>Politique de confidentialité</Link>.
            </p>
          </section>

          {/* ── Cookies ─────────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Cookies</h2>
            <p>
              Ce site utilise Umami Analytics, un outil de mesure d'audience sans cookies et sans
              collecte de données personnelles. Un bandeau de consentement (Klaro) vous permet de
              gérer vos préférences. Pour plus d'informations, voir notre{' '}
              <Link to="/politique-confidentialite" className={styles.link}>Politique de confidentialité</Link>.
            </p>
          </section>

          {/* ── Droit applicable ────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Droit applicable et juridiction compétente</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige,
              et à défaut de résolution amiable, les tribunaux de <strong>Lyon</strong> seront
              seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
