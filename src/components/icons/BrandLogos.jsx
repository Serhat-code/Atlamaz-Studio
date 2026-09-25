// ============================================================
// Logos Atlamaz — tracés vectoriels officiels.
// Source de vérité : public/brand/*.svg (kit de marque complet).
// Les tracés sont remplis en `currentColor` pour que la couleur
// suive le contexte plutôt que d'être figée dans le fichier.
// ============================================================

/**
 * Monogramme « A » barré — viewBox 61.15 × 46.08.
 * Utilisé partout où la marque doit tenir dans un espace réduit
 * (en-tête, favicon, avatars).
 */
export function AtlamazMonogram(props) {
  return (
    <svg viewBox="0 0 61.15 46.08" fill="currentColor" {...props}>
      <path d="M61.15 24.08L61.15 31.08L46.57 31.08L51.15 46.08L42.19 46.08L37.56 31.08L23.52 31.08L18.96 46.08L10.00 46.08L14.58 31.08L0.00 31.08L0.00 24.08L16.72 24.08L24.08 0.00L37.07 0.00L44.43 24.08ZM35.39 24.08L30.48 8.19L25.65 24.08Z" />
    </svg>
  );
}

/**
 * Monogramme composé dans un carré, barre débordant d'un bord à l'autre —
 * viewBox 74.08 × 74.08. Sans fond : c'est le conteneur qui porte la couleur
 * de tuile.
 *
 * Reprend la composition du favicon mais avec le A réduit à 78 % : posé dans
 * une tuile visible (le verre de l'en-tête), il lui faut une respiration que
 * le favicon n'a pas besoin d'avoir — à 16 px un glyphe plus large se lit
 * mieux. La barre, elle, reste pleine largeur dans les deux cas.
 */
const TILE_CENTER = 37.04; // centre du viewBox, et centre du A
const TILE_GLYPH_SCALE = 0.78;

export function AtlamazTileMark(props) {
  return (
    <svg viewBox="0 0 74.08 74.08" fill="currentColor" {...props}>
      {/* Homothétie centrée : le A est déjà centré sur le viewBox, on le
          réduit donc autour de ce même point sans le décaler. */}
      <g
        transform={`translate(${TILE_CENTER} ${TILE_CENTER}) scale(${TILE_GLYPH_SCALE}) translate(${-TILE_CENTER} ${-TILE_CENTER})`}
      >
        <path d="M30.54 14.00L43.54 14.00L57.62 60.08L48.66 60.08L36.94 22.19L25.42 60.08L16.46 60.08Z" />
      </g>
      {/* Barre hors du groupe : son épaisseur suit le A (7 × 0.78) mais sa
          largeur reste celle du viewBox, sinon elle décollerait des bords. */}
      <rect y="37.85" width="74.08" height="5.46" />
    </svg>
  );
}

/**
 * Logotype « ATLAMAZ » seul — viewBox 418.08 × 46.08.
 * Le lockup complet (avec le sous-titre STUDIO) est servi en fichier
 * depuis /brand/ : ses lettres sont vectorisées en milliers de segments
 * et alourdiraient le bundle pour un élément de pied de page.
 */
export function AtlamazWordmark(props) {
  return (
    <svg viewBox="0 0 418.08 46.08" fill="currentColor" {...props}>
      <path d="M46.08 0.00L59.07 0.00L66.43 24.08L95.14 24.08L95.14 31.08L68.57 31.08L73.15 46.08L64.19 46.08L59.56 31.08L45.52 31.08L40.96 46.08L32.00 46.08L36.58 31.08L0.00 31.08L0.00 24.08L38.72 24.08ZM52.48 8.19L47.65 24.08L57.39 24.08ZM134.13 24.08L134.13 31.08L110.84 31.08L110.84 24.08ZM184.18 24.08L191.54 0.00L204.53 0.00L211.89 24.08L229.91 24.08L229.91 31.08L214.02 31.08L218.61 46.08L209.65 46.08L205.01 31.08L190.98 31.08L186.42 46.08L177.46 46.08L182.04 31.08L149.84 31.08L149.84 24.08ZM202.85 24.08L197.94 8.19L193.11 24.08ZM107.34 46.08L98.64 46.08L98.64 8.13L84.11 8.13L84.11 0.00L121.87 0.00L121.87 8.13L107.34 8.13ZM137.63 0.00L146.34 0.00L146.34 37.95L166.18 37.95L166.18 46.08L137.63 46.08ZM335.44 46.08L326.48 46.08L321.84 31.08L307.81 31.08L303.25 46.08L294.29 46.08L298.87 31.08L282.99 31.08L282.99 24.08L301.01 24.08L308.37 0.00L321.36 0.00L328.72 24.08L357.31 24.08L353.15 31.08L330.86 31.08ZM314.77 8.19L309.94 24.08L319.68 24.08ZM418.08 24.08L418.08 31.08L372.41 31.08L376.55 24.08ZM279.49 46.08L271.36 46.08L271.36 18.56L257.98 46.08L254.91 46.08L241.54 18.56L241.54 46.08L233.41 46.08L233.41 0.00L241.22 0.00L256.45 30.59L271.68 0.00L279.49 0.00ZM364.32 37.89L385.44 37.89L385.44 46.08L348.96 46.08L348.96 44.99L370.85 8.13L350.88 8.13L350.88 0.00L386.08 0.00L386.08 1.09Z" />
    </svg>
  );
}
