import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FORMSPREE_ENDPOINT } from '../config/formspree';
import styles from '../styles/ContactForm.module.css';

const TYPE_PROJET_OPTIONS = [
  { value: 'landing',     label: 'Landing page' },
  { value: 'vitrine',     label: 'Site vitrine' },
  { value: 'boutique',    label: 'Boutique en ligne' },
  { value: 'mobile',      label: 'Application mobile' },
  { value: 'refonte',     label: 'Refonte' },
  { value: 'sur-mesure',  label: 'Sur mesure' },
  { value: 'autre',       label: 'Autre' },
];

const BUDGET_OPTIONS = [
  { value: 'moins-500', label: '< 500€' },
  { value: '500-1000',  label: '500 – 1 000€' },
  { value: '1000-2000', label: '1 000 – 2 000€' },
  { value: 'plus-2000', label: '2 000€ +' },
  { value: 'a-definir', label: 'À définir' },
];

export default function ContactForm({ onClose }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    typeProjet: '', budget: '', message: '', rgpd: false,
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Prénom: form.prenom,
          Nom: form.nom,
          Email: form.email,
          Téléphone: form.telephone,
          'Type de projet': form.typeProjet,
          Budget: form.budget,
          Message: form.message,
        }),
      });

      if (res.ok) {
        onClose?.();
        navigate('/merci');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>
      <div className={styles.row2}>
        <div className={styles.field}>
          <label htmlFor="cf-prenom" className={styles.label}>Prénom</label>
          <input
            id="cf-prenom" name="prenom" type="text" placeholder="Jean"
            value={form.prenom} onChange={handleChange}
            required className={styles.input} autoComplete="given-name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-nom" className={styles.label}>Nom</label>
          <input
            id="cf-nom" name="nom" type="text" placeholder="Dupont"
            value={form.nom} onChange={handleChange}
            required className={styles.input} autoComplete="family-name"
          />
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.field}>
          <label htmlFor="cf-email" className={styles.label}>Email</label>
          <input
            id="cf-email" name="email" type="email" placeholder="jean@exemple.fr"
            value={form.email} onChange={handleChange}
            required className={styles.input} autoComplete="email"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-telephone" className={styles.label}>Téléphone</label>
          <input
            id="cf-telephone" name="telephone" type="tel" placeholder="+33 6 00 00 00 00"
            value={form.telephone} onChange={handleChange}
            className={styles.input} autoComplete="tel"
          />
        </div>
      </div>

      <div className={styles.row2}>
        <div className={styles.field}>
          <label htmlFor="cf-typeProjet" className={styles.label}>Type de projet</label>
          <select
            id="cf-typeProjet" name="typeProjet"
            value={form.typeProjet} onChange={handleChange}
            required className={`${styles.input} ${styles.select}`}
          >
            <option value="" disabled>Choisir...</option>
            {TYPE_PROJET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-budget" className={styles.label}>Budget estimé</label>
          <select
            id="cf-budget" name="budget"
            value={form.budget} onChange={handleChange}
            className={`${styles.input} ${styles.select}`}
          >
            <option value="" disabled>Choisir...</option>
            {BUDGET_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message" className={styles.label}>Message</label>
        <textarea
          id="cf-message" name="message" placeholder="Décrivez votre projet en quelques lignes..."
          value={form.message} onChange={handleChange}
          required rows={4} className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <label className={styles.checkboxLabel}>
        <input
          type="checkbox" name="rgpd"
          checked={form.rgpd} onChange={handleChange}
          required className={styles.checkbox}
        />
        <span className={styles.checkboxText}>
          J'accepte que mes données soient utilisées pour traiter ma demande
        </span>
      </label>

      {status === 'error' && (
        <p className={styles.errorMsg} role="alert">
          Une erreur s'est produite. Réessayez ou écrivez-moi directement à atlamazstudio@gmail.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting' || !form.rgpd}
        className={`btn btn--primary ${styles.submitBtn}`}
      >
        {status === 'submitting' ? 'Envoi en cours…' : 'Envoyer le message'}
      </button>
    </form>
  );
}
