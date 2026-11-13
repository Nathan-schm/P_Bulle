// @ts-check

/**
 * Retourne le message d'accès correspondant au niveau.
 * @param {*} level
 * @returns
 */
export function accessMessage(level) {
  if (level >= 5) return "Accès autorisé";
  else return "Accès refusé";
}

/**
 * Retourne l'état textuel d'une porte.
 */
export function doorStatus(isOpen) {
  switch (isOpen) {
    case true:
      return "Ouverte";
    case false:
      return "Fermée";
  }
}

/**
 * Retourne le nom de la zone correspondant à un code.
 */
export function zoneName(code) {
  // TODO
}

/**
 * Détermine le niveau d'alerte selon l'énergie disponible.
 */
export function alertLevel(energy) {
  // TODO
}
