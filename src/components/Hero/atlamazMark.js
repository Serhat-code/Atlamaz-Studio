// Wordmark ΛTLΛMΛZ en SVG, géométrie maison (aucune police requise).
// markSVG() est pur → utilisable au rendu SSR. Le moteur de particules
// le rastérise pour en tirer les points du logo.

const H = 100;      // hauteur des capitales
const S = 18;       // épaisseur du trait (Manrope 800-like)
const GAP = 12;     // approche entre lettres
const EXT = 44;     // dépassement de la barre de chaque côté
const PAD = 7;      // coupe de la barre autour de T, L, M, Z
const BAR_TOP = 56; // position par défaut de la barre
const W = { 'Λ': 80, T: 66, L: 54, M: 86, Z: 64 };
const SEQ = ['Λ', 'T', 'L', 'Λ', 'M', 'Λ', 'Z'];

const r = (n) => +n.toFixed(2);

const ITEMS = (() => {
  let x = 0;
  return SEQ.map((ch, i) => {
    const it = { ch, i, x, w: W[ch] };
    x += W[ch] + GAP;
    return it;
  });
})();
const TOTAL = ITEMS.at(-1).x + ITEMS.at(-1).w;

function glyph(ch, w) {
  switch (ch) {
    case 'Λ': {
      const t = S / Math.sin(Math.atan((2 * H) / w));
      const ia = (2 * H * t) / w;
      return `<polygon points="0,${H} ${w / 2},0 ${w},${H} ${r(w - t)},${H} ${w / 2},${r(ia)} ${r(t)},${H}"/>`;
    }
    case 'T':
      return `<rect width="${w}" height="${S}"/><rect x="${r(w / 2 - S / 2)}" width="${S}" height="${H}"/>`;
    case 'L':
      return `<rect width="${S}" height="${H}"/><rect y="${H - S}" width="${w}" height="${S}"/>`;
    case 'M': {
      const vd = H * 0.62;
      const t = S / Math.sin(Math.atan((2 * vd) / w));
      const iy = vd - (2 * vd * t) / w;
      return `<rect width="${S}" height="${H}"/><rect x="${w - S}" width="${S}" height="${H}"/>` +
        `<polygon points="0,0 ${w / 2},${vd} ${w},0 ${r(w - t)},0 ${w / 2},${r(iy)} ${r(t)},0"/>`;
    }
    case 'Z': {
      const t = S / Math.sin(Math.atan((H - 2 * S) / w));
      return `<rect width="${w}" height="${S}"/><rect y="${H - S}" width="${w}" height="${S}"/>` +
        `<polygon points="${r(w - t)},${S} ${w},${S} ${r(t)},${H - S} 0,${H - S}"/>`;
    }
    default:
      return '';
  }
}

export function markSVG() {
  const vx = -EXT - 4;
  const vw = TOTAL + 2 * EXT + 8;
  const vy = -8;
  const vh = H + 16;
  const full = TOTAL + 2 * EXT;

  const letters = ITEMS.map((it) =>
    `<g transform="translate(${it.x},0)"><g class="am-l${it.ch === 'Λ' ? ' am-a' : ''}" style="--d:${it.i}">${glyph(it.ch, it.w)}</g></g>`
  ).join('');

  const cuts = ITEMS.filter((it) => it.ch !== 'Λ')
    .map((it) => `<rect x="${it.x - PAD}" y="${vy}" width="${it.w + PAD * 2}" height="${vh}" fill="#000"/>`)
    .join('');

  return `<svg class="am" viewBox="${vx} ${vy} ${vw} ${vh}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Atlamaz Studio">
<defs>
<mask id="am-cut" maskUnits="userSpaceOnUse" x="${vx}" y="${vy}" width="${vw}" height="${vh}"><rect x="${vx}" y="${vy}" width="${vw}" height="${vh}" fill="#fff"/>${cuts}</mask>
<clipPath id="am-grow"><rect class="am-grow" x="${-EXT}" y="${vy}" width="${full}" height="${vh}"/></clipPath>
<linearGradient id="am-spark-g" x1="0" x2="1"><stop offset="0" stop-color="#4F5BFF" stop-opacity="0"/><stop offset=".7" stop-color="#4F5BFF"/><stop offset=".93" stop-color="#FFFFFF"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient>
<filter id="am-blur" x="-10%" y="-300%" width="120%" height="700%"><feGaussianBlur stdDeviation="5"/></filter>
</defs>
<g>${letters}</g>
<g mask="url(#am-cut)"><g clip-path="url(#am-grow)"><g class="am-bar" transform="translate(0,${BAR_TOP})">
<rect x="${-EXT}" y="-3" width="${full}" height="${S + 6}" fill="#4F5BFF" opacity=".45" filter="url(#am-blur)"/>
<rect x="${-EXT}" width="${full}" height="${S}" fill="currentColor"/>
<rect class="am-spark" x="-400" width="110" height="${S}" fill="url(#am-spark-g)"/>
</g></g></g>
</svg>`;
}
