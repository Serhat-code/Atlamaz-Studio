import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import styles from '../styles/LegalPage.module.css';

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Helmet>
        <title>Politique de confidentialité — Atlamaz Studio</title>
        <meta name="description" content="Politique de confidentialité et protection des données personnelles — Atlamaz Studio." />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.backLink}>← Retour à l'accueil</Link>

          <h1 className={styles.pageTitle}>Politique de confidentialité</h1>
          <p className={styles.updated}>Dernière mise à jour : mai 2026 — Conforme au Règlement UE 2016/679 (RGPD)</p>

          {/* ── Responsable ────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Responsable du traitement</h2>
            <ul className={styles.list}>
              <li><strong>Nom :</strong> Serhat Atlamaz — Atlamaz Studio</li>
              <li><strong>Email :</strong> <a href="mailto:atlamazstudio@gmail.com" className={styles.link}>atlamazstudio@gmail.com</a></li>
              <li><strong>Adresse :</strong> Lyon, France</li>
            </ul>
          </section>

          {/* ── Données collectées ──────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Données collectées</h2>
            <p>Lors de l'utilisation du formulaire de contact, les données suivantes peuvent être collectées :</p>
            <ul className={styles.list}>
              <li>Prénom et nom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Type de projet et budget estimé</li>
              <li>Contenu du message</li>
            </ul>
            <p>Aucune donnée sensible (santé, opinion politique, etc.) n'est collectée.</p>
          </section>

          {/* ── Finalité ────────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Finalité du traitement</h2>
            <p>Les données collectées sont utilisées exclusivement pour :</p>
            <ul className={styles.list}>
              <li>Répondre à vos demandes de devis et de contact</li>
              <li>Établir des propositions commerciales</li>
              <li>Assurer le suivi de notre relation commerciale</li>
            </ul>
            <p>Elles ne sont jamais utilisées à des fins de prospection commerciale non sollicitée ni vendues à des tiers.</p>
          </section>

          {/* ── Base légale ─────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Base légale</h2>
            <p>
              Le traitement de vos données est fondé sur votre <strong>consentement explicite</strong>{' '}
              (article 6.1.a du RGPD), matérialisé par la case à cocher obligatoire dans le formulaire
              de contact.
            </p>
          </section>

          {/* ── Durée de conservation ───────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant <strong>3 ans</strong> à compter du dernier contact,
              sauf obligation légale de conservation plus longue (comptabilité : 10 ans).
            </p>
          </section>

          {/* ── Destinataires ───────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Destinataires des données</h2>
            <p>Vos données sont transmises aux prestataires suivants dans le cadre strict de leur traitement :</p>
            <ul className={styles.list}>
              <li>
                <strong>Formspree</strong> (traitement des formulaires) — société américaine disposant
                d'un accord de traitement conforme au RGPD. Plus d'infos :{' '}
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className={styles.link}>formspree.io/legal</a>
              </li>
            </ul>
            <p>Aucune donnée n'est transmise à d'autres tiers sans votre consentement explicite.</p>
          </section>

          {/* ── Transferts hors UE ──────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Transferts hors Union européenne</h2>
            <p>
              Formspree est une société américaine. Les transferts de données vers les États-Unis
              sont encadrés par les clauses contractuelles types approuvées par la Commission européenne,
              garantissant un niveau de protection adéquat conformément à l'article 46 du RGPD.
            </p>
          </section>

          {/* ── Analytics ───────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Analytics — Umami</h2>
            <p>
              Ce site utilise <strong>Umami Analytics</strong>, un outil de mesure d'audience open source
              qui <strong>ne dépose aucun cookie</strong> et ne collecte <strong>aucune donnée personnelle</strong>.
              Les statistiques sont anonymisées et ne permettent pas d'identifier les visiteurs.
              Umami est conforme au RGPD sans nécessiter de consentement.
            </p>
            <p>
              Vous pouvez néanmoins refuser la collecte analytics via le bandeau de consentement affiché
              à votre première visite.
            </p>
          </section>

          {/* ── Cookies ─────────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Cookies et traceurs</h2>
            <p>Ce site utilise un gestionnaire de consentement (<strong>Klaro</strong>) conforme aux recommandations de la CNIL.</p>
            <ul className={styles.list}>
              <li><strong>Cookies strictement nécessaires :</strong> gestion de votre consentement (Klaro) — pas de consentement requis</li>
              <li><strong>Cookies analytics :</strong> Umami (anonyme, sans cookie) — soumis à votre consentement</li>
            </ul>
            <p>
              Vous pouvez modifier vos préférences à tout moment en cliquant sur "Gérer mes cookies"
              (lien en pied de page).
            </p>
          </section>

          {/* ── Vos droits ──────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className={styles.list}>
              <li><strong>Droit d'accès</strong> : connaître les données que nous détenons sur vous</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong>Droit de retrait du consentement</strong> : à tout moment, sans effet rétroactif</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous par email :{' '}
              <a href="mailto:atlamazstudio@gmail.com" className={styles.link}>atlamazstudio@gmail.com</a>
            </p>
            <p>
              En cas de réponse insatisfaisante, vous pouvez introduire une réclamation auprès de la{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={styles.link}>CNIL</a>.
            </p>
          </section>

          {/* ── Contact DPO ─────────────────────────────────────── */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact</h2>
            <p>
              Pour toute question relative à cette politique de confidentialité :{' '}
              <a href="mailto:atlamazstudio@gmail.com" className={styles.link}>atlamazstudio@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
