// @ts-check

/**
 * Retourne le type JavaScript de la valeur.
 * @param {*} value
 * @returns le type de value
 */
export function valueType(value) {
  return typeof value;
}

/**
 * Indique si la valeur est undefined.
 * @param {*} value
 * @returns
 */
export function isUndefined(value) {
  if (value.isUndefined === value) return true;
  if (value.isNull) return false;
}

/**
 * Indique si la valeur est null.
 */
export function isNull(value) {
  // TODO
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 */
export function hasKnownValue(value) {
  // TODO
}

/**
 * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  // TODO
}

/**
 * Compare strictement le nom de la zone attendue.
 */
export function isCorrectZone(zone, expectedZone) {
  // TODO
}
