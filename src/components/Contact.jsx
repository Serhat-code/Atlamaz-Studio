import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FORMSPREE_ENDPOINT } from '../config/formspree';
import styles from '../styles/Contact.module.css';

export default function Contact({ t }) {
  const { contact } = t;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    prenom:     '',
    nom:        '',
    email:      '',
    telephone:  '',
    typeProjet: '',
    budget:     '',
    message:    '',
    rgpd:       false,
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.rgpd) return;

    setStatus('submitting');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify({
          Prénom:           form.prenom,
          Nom:              form.nom,
          Email:            form.email,
          Téléphone:        form.telephone,
          'Type de projet': form.typeProjet,
          Budget:           form.budget,
          Message:          form.message,
        }),
      });

      if (res.ok) {
        // Resend — email de confirmation (à configurer côté serveur/edge function)
        // TODO: déclencher un email de confirmation via Resend API
        navigate('/merci');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const f = contact.fields;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className={styles.layout}>
          {/* Header */}
          <div className={styles.header}>
            <span className="section-label">{contact.label}</span>
            <h2 className="section-title">
              {contact.title} <strong>{contact.titleStrong}</strong>
            </h2>
            <p className="section-subtitle">{contact.subtitle}</p>

            {/* Info rapide */}
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">⏱</span>
                <span>Réponse sous 48h</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">✓</span>
                <span>Devis gratuit et sans engagement</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoIcon} aria-hidden="true">🔒</span>
                <span>Données protégées (RGPD)</span>
              </li>
            </ul>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className={styles.form} noValidate>
            {/* Ligne 1 : Prénom / Nom */}
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="prenom" className={styles.label}>{f.prenom.label}</label>
                <input
                  id="prenom" name="prenom" type="text"
                  placeholder={f.prenom.placeholder}
                  value={form.prenom} onChange={handleChange}
                  required className={styles.input}
                  autoComplete="given-name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="nom" className={styles.label}>{f.nom.label}</label>
                <input
                  id="nom" name="nom" type="text"
                  placeholder={f.nom.placeholder}
                  value={form.nom} onChange={handleChange}
                  required className={styles.input}
                  autoComplete="family-name"
                />
              </div>
            </div>

            {/* Ligne 2 : Email / Téléphone */}
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>{f.email.label}</label>
                <input
                  id="email" name="email" type="email"
                  placeholder={f.email.placeholder}
                  value={form.email} onChange={handleChange}
                  required className={styles.input}
                  autoComplete="email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="telephone" className={styles.label}>{f.telephone.label}</label>
                <input
                  id="telephone" name="telephone" type="tel"
                  placeholder={f.telephone.placeholder}
                  value={form.telephone} onChange={handleChange}
                  className={styles.input}
                  autoComplete="tel"
                />
              </div>
            </div>

            {/* Ligne 3 : Type de projet / Budget */}
            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="typeProjet" className={styles.label}>{f.typeProjet.label}</label>
                <select
                  id="typeProjet" name="typeProjet"
                  value={form.typeProjet} onChange={handleChange}
                  required className={`${styles.input} ${styles.select}`}
                >
                  <option value="" disabled>{f.typeProjet.placeholder}</option>
                  {f.typeProjet.options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="budget" className={styles.label}>{f.budget.label}</label>
                <select
                  id="budget" name="budget"
                  value={form.budget} onChange={handleChange}
                  className={`${styles.input} ${styles.select}`}
                >
                  <option value="" disabled>{f.budget.placeholder}</option>
                  {f.budget.options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>{f.message.label}</label>
              <textarea
                id="message" name="message"
                placeholder={f.message.placeholder}
                value={form.message} onChange={handleChange}
                required rows={5} className={`${styles.input} ${styles.textarea}`}
              />
            </div>

            {/* RGPD */}
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox" name="rgpd"
                checked={form.rgpd} onChange={handleChange}
                required className={styles.checkbox}
              />
              <span className={styles.checkboxText}>{f.rgpd}</span>
            </label>

            {/* Erreur */}
            {status === 'error' && (
              <p className={styles.errorMsg} role="alert">{contact.errorText}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting' || !form.rgpd}
              className={`btn btn--primary ${styles.submitBtn}`}
            >
              {status === 'submitting' ? contact.submitting : contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
