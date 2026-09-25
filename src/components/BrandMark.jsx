import { AtlamazTileMark } from './icons/BrandLogos';
import styles from '../styles/BrandMark.module.css';

// Marque Atlamaz en verre. Le monogramme est un SVG inline plutôt qu'une
// image : il hérite ainsi de `currentColor` et se peint au-dessus du reflet
// spéculaire, ce qu'un PNG opaque ne permettrait pas.
// Composition carrée (celle du favicon) : la barre doit toucher les bords
// de la tuile, elle occupe donc toute la largeur plutôt qu'une fraction.
// Taille pilotée par --mark-size sur le parent.
export default function BrandMark() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <AtlamazTileMark className={styles.glyph} />
    </span>
  );
}
