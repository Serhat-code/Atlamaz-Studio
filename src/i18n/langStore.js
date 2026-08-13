// ============================================================
// ATLAMAZ STUDIO — Préférence de langue
// ============================================================
// Exposée en « external store » plutôt qu'en useState : le HTML est pré-rendu
// au build, sans accès au localStorage du visiteur. useSyncExternalStore permet
// de servir 'fr' pendant le rendu statique et l'hydratation, puis de basculer
// sur la préférence réelle — sans divergence d'hydratation ni setState en effet.

const STORAGE_KEY = 'lang';
const listeners = new Set();

export function subscribeLang(onChange) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

/** Snapshot client — renvoie une primitive, donc stable entre deux rendus. */
export function getLang() {
  return localStorage.getItem(STORAGE_KEY) || 'fr';
}

/** Snapshot serveur : les URLs du site sont uniquement françaises. */
export function getServerLang() {
  return 'fr';
}

export function setLang(next) {
  localStorage.setItem(STORAGE_KEY, next);
  listeners.forEach((notify) => notify());
}
