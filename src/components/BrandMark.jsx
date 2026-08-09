import styles from '../styles/BrandMark.module.css';

// Marque Atlamaz en verre. Le "A" est rendu en texte plutôt qu'en image :
// un PNG opaque ne peut pas être translucide, le verre ne se voyait alors
// qu'en liseré autour du carré noir.
// Taille pilotée par --mark-size sur le parent.
export default function BrandMark() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <span className={styles.glyph}>A</span>
    </span>
  );
}
