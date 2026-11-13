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
 * @returns boolean
 */
export function isUndefined(value) {
  return value === undefined;
}

/**
 * Indique si la valeur est null.
 * @param {*} value
 * @returns boolean
 */
export function isNull(value) {
  return value === null;
}

/**
 * Indique si une valeur est connue, c'est-à-dire
 * différente de undefined et de null.
 * @param {*} value
 * @returns
 */
export function hasKnownValue(value) {
  return value !== null && value !== undefined;
}

/**
 * * Compare l'énergie disponible à l'énergie minimale.
 * Les deux valeurs sont converties en nombres.
 * @param {*} energy
 * @param {*} minimumEnergy
 * @returns
 */
export function hasEnoughEnergy(energy, minimumEnergy) {
  return Number(energy) >= Number(minimumEnergy);
}

/**
 * Compare strictement le nom de la zone attendue.
 * @param {*} zone
 * @param {*} expectedZone
 */
export function isCorrectZone(zone, expectedZone) {
  return zone === expectedZone;
}
