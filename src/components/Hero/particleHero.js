// Hero Atlamaz : nuage de particules 3D qui se transforme en boucle.
// ΛTLΛMΛZ → globe (web) → téléphone (mobile) → couches + graphique (SaaS)
// → réseau de neurones en couches où circulent des influx (automatisations IA).
// Le curseur fait pivoter la forme et y creuse un trou. Client uniquement.

import { markSVG } from './atlamazMark';

// Clés utilisables avec l'option `shape` (une seule forme, sans cycle) :
export const SHAPE_KEYS = ['atlamaz', 'web', 'mobile', 'saas', 'ia'];

const TAU = Math.PI * 2;
const INK = '242,242,240';
const ACCENT = '79,91,255';
const ALPHA = [0.22, 0.42, 0.68, 0.95];
const rnd = (a, b) => a + Math.random() * (b - a);

// ---------- Générateurs de formes (coordonnées normalisées, y vers le bas) ----------

function set(P, i, x, y, z) { P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z; }

function makeGlobe(N) {
  const P = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = Math.random();
    if (r < 0.1) { // anneau d'orbite incliné
      const a = rnd(0, TAU), R = 1.38;
      const x = Math.cos(a) * R, z = Math.sin(a) * R;
      set(P, i, x, z * 0.28 - x * 0.12, z * 0.96);
      continue;
    }
    let lat, lon;
    if (r < 0.48) { lat = (Math.floor(Math.random() * 8) - 3.5) * (Math.PI / 9); lon = rnd(0, TAU); }
    else if (r < 0.84) { lon = Math.floor(Math.random() * 12) * (TAU / 12); lat = rnd(-Math.PI / 2, Math.PI / 2); }
    else { lat = Math.asin(rnd(-1, 1)); lon = rnd(0, TAU); }
    set(P, i, Math.cos(lat) * Math.cos(lon), Math.sin(lat), Math.cos(lat) * Math.sin(lon));
  }
  return { pos: P, scale: 0.36, spin: 0.00028, tilt: 0.32 };
}

function roundRectPoint(hw, hh, r) {
  const sx = 2 * (hw - r), sy = 2 * (hh - r), arc = (Math.PI / 2) * r;
  const total = 2 * sx + 2 * sy + 4 * arc;
  let t = Math.random() * total;
  const segs = [
    [sx, (u) => [-hw + r + u * sx, -hh]],
    [arc, (u) => { const a = -Math.PI / 2 + u * (Math.PI / 2); return [hw - r + Math.cos(a) * r, -hh + r + Math.sin(a) * r]; }],
    [sy, (u) => [hw, -hh + r + u * sy]],
    [arc, (u) => { const a = u * (Math.PI / 2); return [hw - r + Math.cos(a) * r, hh - r + Math.sin(a) * r]; }],
    [sx, (u) => [hw - r - u * sx, hh]],
    [arc, (u) => { const a = Math.PI / 2 + u * (Math.PI / 2); return [-hw + r + Math.cos(a) * r, hh - r + Math.sin(a) * r]; }],
    [sy, (u) => [-hw, hh - r - u * sy]],
    [arc, (u) => { const a = Math.PI + u * (Math.PI / 2); return [-hw + r + Math.cos(a) * r, -hh + r + Math.sin(a) * r]; }],
  ];
  for (const [len, fn] of segs) { if (t <= len) return fn(t / len); t -= len; }
  return [hw, hh];
}

function rectPoint(x0, y0, x1, y1, filled) {
  if (filled) return [rnd(x0, x1), rnd(y0, y1)];
  const w = x1 - x0, h = y1 - y0;
  let t = Math.random() * 2 * (w + h);
  if (t < w) return [x0 + t, y0]; t -= w;
  if (t < h) return [x1, y0 + t]; t -= h;
  if (t < w) return [x1 - t, y1]; t -= w;
  return [x0, y1 - (t - w)];
}

function makePhone(N) {
  const P = new Float32Array(N * 3);
  const hw = 0.5, hh = 1, d = 0.07;
  const ui = [ // [x0, y0, x1, y1, rempli, poids]
    [-0.13, -0.9, 0.13, -0.85, true, 0.5],
    [-0.36, -0.72, 0.1, -0.66, true, 0.6],
    [-0.36, -0.56, 0.36, -0.14, false, 1.4],
    [-0.36, -0.04, -0.03, 0.26, true, 1.5],
    [0.03, -0.04, 0.36, 0.26, false, 0.9],
    [-0.36, 0.36, 0.26, 0.39, true, 0.4],
    [-0.36, 0.45, 0.06, 0.48, true, 0.3],
    [-0.36, 0.6, 0.36, 0.74, true, 1.2],
    [-0.14, 0.92, 0.14, 0.935, true, 0.2],
  ];
  const wsum = ui.reduce((s, u) => s + u[5], 0);
  for (let i = 0; i < N; i++) {
    const r = Math.random();
    if (r < 0.44) {
      const [x, y] = roundRectPoint(hw, hh, 0.17);
      const z = r < 0.08 ? rnd(-d, d) : (Math.random() < 0.5 ? -d : d);
      set(P, i, x, y, z);
    } else {
      let t = Math.random() * wsum, u = ui[0];
      for (const e of ui) { if (t <= e[5]) { u = e; break; } t -= e[5]; }
      const [x, y] = rectPoint(u[0], u[1], u[2], u[3], u[4]);
      set(P, i, x, y, -d - 0.01);
    }
  }
  return { pos: P, scale: 0.4, sway: 0.5, tilt: 0.1, yaw: -0.35 };
}

function makeSaas(N) {
  const P = new Float32Array(N * 3);
  const hw = 0.78, levels = [0.62, 0.12, -0.38];
  const bars = [[-0.42, -0.4, 0.22], [-0.1, -0.1, 0.38], [0.22, 0.2, 0.52], [0.5, 0.48, 0.7]];
  for (let i = 0; i < N; i++) {
    const r = Math.random();
    if (r < 0.62) { // plaques
      const y = levels[Math.floor(Math.random() * 3)];
      if (Math.random() < 0.7) {
        const [x, z] = roundRectPoint(hw, hw, 0.12);
        set(P, i, x, y, z);
      } else {
        const g = (Math.floor(Math.random() * 5) - 2) * (hw / 2.5);
        const u = rnd(-hw, hw);
        if (Math.random() < 0.5) set(P, i, g, y, u); else set(P, i, u, y, g);
      }
    } else if (r < 0.68) { // liaisons entre plaques
      const cx = Math.random() < 0.5 ? -hw : hw, cz = Math.random() < 0.5 ? -hw : hw;
      set(P, i, cx, rnd(levels[2], levels[0]), cz);
    } else { // graphique qui sort de la plaque du haut
      const [bx, bz, bh] = bars[Math.floor(Math.random() * bars.length)];
      const s = 0.075;
      const cx = bx + (Math.random() < 0.5 ? -s : s), cz = bz + (Math.random() < 0.5 ? -s : s);
      if (Math.random() < 0.75) set(P, i, cx, levels[2] - rnd(0, bh), cz);
      else {
        const [x, z] = rectPoint(bx - s, bz - s, bx + s, bz + s, true);
        set(P, i, x, levels[2] - bh, z);
      }
    }
  }
  return { pos: P, scale: 0.34, spin: 0.00022, tilt: 0.55, yaw: Math.PI / 4, offsetY: 0.22 };
}

function makeNeuralNet(N) {
  // Réseau de neurones en volume : quatre couches de nœuds disposées en
  // anneaux verticaux (plan y, z), échelonnées sur x. Vus avec un léger
  // pivot, les anneaux deviennent des ellipses distinctes : le relief se lit
  // sans que les couches se superposent, même dans un petit canvas.
  // Chaque nœud est relié aux plus proches de la couche suivante ; les
  // influx avancent de l'entrée vers la sortie, dont les nœuds sont en accent.
  const LAYERS = [5, 7, 7, 3];               // nœuds par anneau
  const RADII = [0.5, 0.64, 0.64, 0.34];
  const XS = [-1.3, -0.44, 0.44, 1.3];       // position de chaque couche
  const NODE_R = 0.07, LINKS = 3;
  const OUTPUT = LAYERS.length - 1;

  const layers = LAYERS.map((count, l) => Array.from({ length: count }, (_, k) => {
    const a = -Math.PI / 2 + (k * TAU) / count + l * 0.35;
    return [XS[l], Math.cos(a) * RADII[l], Math.sin(a) * RADII[l]];
  }));
  const nodes = layers.flatMap((pts, l) => pts.map((p) => ({ p, l })));
  const firstIndex = layers.map((_, l) => layers.slice(0, l).reduce((s, pts) => s + pts.length, 0));

  const edges = [];
  const seen = new Set();
  const addEdge = (i, j) => {
    const key = `${i}-${j}`;
    if (!seen.has(key)) { seen.add(key); edges.push([i, j]); }
  };
  const dist = (a, b) => Math.hypot(a[1] - b[1], a[2] - b[2]);
  for (let l = 0; l < OUTPUT; l++) {
    const next = layers[l + 1].map((p, k) => [firstIndex[l + 1] + k, p]);
    layers[l].forEach((p, k) => {
      next.slice().sort((u, v) => dist(p, u[1]) - dist(p, v[1])).slice(0, LINKS)
        .forEach(([j]) => addEdge(firstIndex[l] + k, j));
    });
    // Aucun nœud de la couche suivante ne reste sans entrée.
    next.forEach(([j, q]) => {
      if (edges.some(([, b]) => b === j)) return;
      const nearest = layers[l].map((p, k) => [firstIndex[l] + k, dist(p, q)]).sort((u, v) => u[1] - v[1])[0][0];
      addEdge(nearest, j);
    });
  }

  const E = new Float32Array(edges.length * 6);
  edges.forEach(([a, b], e) => { E.set(nodes[a].p, e * 6); E.set(nodes[b].p, e * 6 + 3); });

  const P = new Float32Array(N * 3);
  const accent = new Uint8Array(N);
  const sigEdge = new Int32Array(N).fill(-1);
  const sigPhase = new Float32Array(N);
  const sigSpeed = new Float32Array(N);

  for (let i = 0; i < N; i++) {
    const r = Math.random();
    if (r < 0.36) { // nœuds : petites sphères pleines
      const n = nodes[Math.floor(Math.random() * nodes.length)];
      let dx, dy, dz;
      do { dx = rnd(-1, 1); dy = rnd(-1, 1); dz = rnd(-1, 1); } while (dx * dx + dy * dy + dz * dz > 1);
      set(P, i, n.p[0] + dx * NODE_R, n.p[1] + dy * NODE_R, n.p[2] + dz * NODE_R);
      if (n.l === OUTPUT) accent[i] = 1;
    } else if (r < 0.9) { // liaisons pointillées, dégagées autour des nœuds
      const o = Math.floor(Math.random() * edges.length) * 6;
      const t = rnd(0.1, 0.9);
      set(P, i,
        E[o] + (E[o + 3] - E[o]) * t,
        E[o + 1] + (E[o + 4] - E[o + 1]) * t,
        E[o + 2] + (E[o + 5] - E[o + 2]) * t);
    } else { // influx, toujours de l'entrée vers la sortie
      sigEdge[i] = Math.floor(Math.random() * edges.length);
      sigPhase[i] = Math.random();
      sigSpeed[i] = rnd(0.0003, 0.0007);
      set(P, i, 0, 0, 0);
    }
  }
  return { pos: P, scale: 0.62, fitW: 0.3, yaw: -0.42, sway: 0.28, tilt: 0.12, accent, signals: { sigEdge, sigPhase, sigSpeed, E } };
}

function makeScatter(N) {
  const P = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) set(P, i, rnd(-1.4, 1.4), rnd(-0.5, 0.5), rnd(-0.5, 0.5));
  return { pos: P, scale: 0.46, sway: 0.15, flat: true };
}

function makeWordmark(N) {
  return new Promise((resolve) => {
    const src = markSVG();
    const [, , vw, vh] = src.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
    const W = 1400, H = Math.round((W * vh) / vw);
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = W; c.height = H;
      const o = c.getContext('2d', { willReadFrequently: true });
      o.drawImage(img, 0, 0, W, H);
      const d = o.getImageData(0, 0, W, H).data;
      const pts = [];
      for (let y = 0; y < H; y += 3) for (let x = 0; x < W; x += 3) if (d[(y * W + x) * 4 + 3] > 200) pts.push(x, y);
      const P = new Float32Array(N * 3);
      const count = pts.length / 2;
      for (let i = 0; i < N; i++) {
        const j = Math.floor(Math.random() * count) * 2;
        set(P, i, (pts[j] + rnd(-1.5, 1.5)) / (W / 2) - 1, (pts[j + 1] + rnd(-1.5, 1.5) - H / 2) / (W / 2), rnd(-0.03, 0.03));
      }
      resolve({ pos: P, scale: 0.46, sway: 0.16, flat: true });
    };
    img.onerror = () => resolve(null);
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(src.replace('<svg class="am"', `<svg width="${W}" height="${H}"`))}`;
  });
}

// ---------- Moteur ----------

export function createParticleHero(canvas, { onChange, interval = 4200, shape } = {}) {
  const ctx = canvas.getContext('2d');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const small = window.innerWidth < 700;
  const N = small ? 2400 : 4200;

  const x = new Float32Array(N), y = new Float32Array(N);
  const vx = new Float32Array(N), vy = new Float32Array(N);
  const k = new Float32Array(N), bucket = new Uint8Array(N);
  for (let i = 0; i < N; i++) k[i] = rnd(0.02, 0.06);

  const MAKERS = { atlamaz: makeScatter, web: makeGlobe, mobile: makePhone, saas: makeSaas, ia: makeNeuralNet };
  const single = shape && MAKERS[shape] ? shape : null;
  const shapes = single ? [MAKERS[single](N)] : SHAPE_KEYS.map((key) => MAKERS[key](N));
  let idx = 0, w = 0, h = 0, raf = 0, visible = true, pageVisible = !document.hidden;
  let lastSwitch = performance.now(), started = false;
  const mouse = { x: -1e4, y: -1e4, nx: 0, ny: 0, sx: 0, sy: 0 };

  function resize() {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const ow = w, oh = h;
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!started) {
      for (let i = 0; i < N; i++) { x[i] = rnd(0, w); y[i] = rnd(0, h); }
    } else if (ow && oh) {
      for (let i = 0; i < N; i++) { x[i] *= w / ow; y[i] *= h / oh; }
    }
    if (reduce) render(performance.now(), true);
  }

  function goTo(n) {
    idx = (n + shapes.length) % shapes.length;
    lastSwitch = performance.now();
    const cx = w / 2, cy = h / 2;
    for (let i = 0; i < N; i++) { // explosion douce avant de se reformer
      const dx = x[i] - cx, dy = y[i] - cy, d = Math.hypot(dx, dy) || 1;
      const f = rnd(4, 11);
      vx[i] += (dx / d) * f + rnd(-2, 2);
      vy[i] += (dy / d) * f + rnd(-2, 2);
    }
    onChange?.(idx);
    if (reduce) render(performance.now(), true);
  }

  function render(now, snap = false) {
    const S = shapes[idx];
    const P = S.pos;
    // fitW : forme large (réseau IA) dimensionnée sur la largeur quand le
    // canvas est bas, au lieu d'être bridée par sa hauteur.
    const scale = S.flat ? Math.min(w * S.scale, h * 1.1)
      : S.fitW ? Math.min(w * S.fitW, h * S.scale)
      : Math.min(w, h) * S.scale;
    const cx = w / 2, cy = h / 2 + (S.offsetY || 0) * scale;

    mouse.sx += (mouse.nx - mouse.sx) * 0.05;
    mouse.sy += (mouse.ny - mouse.sy) * 0.05;
    const yaw = (S.yaw || 0) + (S.spin ? now * S.spin : 0) + (S.sway ? Math.sin(now * 0.0006) * S.sway : 0) + mouse.sx * 0.6;
    const pitch = (S.tilt || 0) + mouse.sy * 0.35;
    const cyw = Math.cos(yaw), syw = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
    const sig = S.signals;
    const R = small ? 60 : 90;

    for (let i = 0; i < N; i++) {
      let px = P[i * 3], py = P[i * 3 + 1], pz = P[i * 3 + 2];
      if (sig && sig.sigEdge[i] >= 0) {
        let t = (sig.sigPhase[i] + now * sig.sigSpeed[i]) % 1; if (t < 0) t += 1;
        const o = sig.sigEdge[i] * 6, E = sig.E;
        px = E[o] + (E[o + 3] - E[o]) * t;
        py = E[o + 1] + (E[o + 4] - E[o + 1]) * t;
        pz = E[o + 2] + (E[o + 5] - E[o + 2]) * t;
      }
      const x1 = px * cyw - pz * syw;
      const z1 = px * syw + pz * cyw;
      const y2 = py * cp - z1 * sp;
      const z2 = py * sp + z1 * cp;
      const persp = 3.2 / (3.2 + z2);
      const tx = cx + x1 * scale * persp;
      const ty = cy + y2 * scale * persp;
      bucket[i] = Math.max(0, Math.min(3, Math.floor(((1 - z2) / 2) * 4)));

      if (snap) { x[i] = tx; y[i] = ty; continue; }
      vx[i] += (tx - x[i]) * k[i];
      vy[i] += (ty - y[i]) * k[i];
      const dx = x[i] - mouse.x, dy = y[i] - mouse.y, d2 = dx * dx + dy * dy;
      if (d2 < R * R) {
        const d = Math.sqrt(d2) || 1, f = (1 - d / R) * 5;
        vx[i] += (dx / d) * f; vy[i] += (dy / d) * f;
      }
      vx[i] *= 0.85; vy[i] *= 0.85;
      x[i] += vx[i]; y[i] += vy[i];
    }

    ctx.clearRect(0, 0, w, h);
    const s = small ? 1.25 : 1.45;
    // Particules peintes en accent : 1 sur 13, les influx, et les
    // particules marquées par la forme (nœuds actifs du réseau IA).
    const acc = S.accent;
    const isAccent = (i) => i % 13 === 0 || (sig && sig.sigEdge[i] >= 0) || (acc && acc[i] === 1);
    for (let b = 0; b < 4; b++) {
      ctx.fillStyle = `rgba(${INK},${ALPHA[b]})`;
      const sz = s + b * 0.22;
      for (let i = 0; i < N; i++) {
        if (bucket[i] !== b || isAccent(i)) continue;
        ctx.fillRect(x[i], y[i], sz, sz);
      }
    }
    ctx.fillStyle = `rgba(${ACCENT},1)`;
    for (let i = 0; i < N; i++) {
      const isSig = sig && sig.sigEdge[i] >= 0;
      if (!isAccent(i)) continue;
      const sz = (isSig ? 2.3 : 1.6) + bucket[i] * 0.2;
      ctx.fillRect(x[i], y[i], sz, sz);
    }
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (!single && now - lastSwitch > interval) goTo(idx + 1);
    render(now);
  }

  const loop = () => {
    cancelAnimationFrame(raf);
    if (reduce || !visible || !pageVisible) return;
    if (!started) { started = true; lastSwitch = performance.now(); }
    raf = requestAnimationFrame(frame);
  };

  const host = canvas.parentElement;
  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    mouse.nx = Math.max(-1, Math.min(1, (mouse.x / r.width) * 2 - 1));
    mouse.ny = Math.max(-1, Math.min(1, (mouse.y / r.height) * 2 - 1));
  };
  const onLeave = () => { mouse.x = mouse.y = -1e4; mouse.nx = mouse.ny = 0; };
  const onUp = (e) => { if (e.pointerType !== 'mouse') onLeave(); };
  const onVis = () => { pageVisible = !document.hidden; loop(); };

  const ro = new ResizeObserver(resize);
  const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; loop(); });
  host.addEventListener('pointermove', onMove);
  host.addEventListener('pointerdown', onMove);
  host.addEventListener('pointerleave', onLeave);
  host.addEventListener('pointerup', onUp);
  document.addEventListener('visibilitychange', onVis);

  resize();
  onChange?.(0);
  if (!single || single === 'atlamaz') makeWordmark(N).then((wm) => {
    if (wm) shapes[0] = wm;
    if (reduce) render(performance.now(), true);
  });
  ro.observe(canvas);
  io.observe(canvas);

  return {
    goTo,
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerdown', onMove);
      host.removeEventListener('pointerleave', onLeave);
      host.removeEventListener('pointerup', onUp);
      document.removeEventListener('visibilitychange', onVis);
    },
  };
}
