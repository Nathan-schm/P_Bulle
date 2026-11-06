// @ts-check

/**
 * Convertit une valeur en nombre.
 * @param {number} value
 * @returns converti le string en nombre
 */
export function convertCode(value) {
  return Number(value);
}

/**
 * Compare deux valeurs avec l'égalité souple.
 * @param {number} value1
 * @param {number} value2
 * @returns la comparaison entre les 2 valeurs
 */
export function sameCodeLoose(value1, value2) {
  return value1 == value2;
}

/**
 * Compare deux valeurs avec l'égalité stricte.
 * @param {*} value1
 * @param {*} value2
 * @returns compare 2 valeur entre elles
 */
export function sameCodeStrict(value1, value2) {
  return value1 === value2;
}

/**
 * Indique si un code est pair.
 * @param {number} code
 * @returns une comparaison entre 2 valeur du même type
 */
export function isEvenCode(code) {
  let x = code % 2;
  return x === 0;
}

/**
 * Indique si la conversion de la valeur produit NaN.
 * @param {*} value
 * @returns si la conversion est de type NaN ou pas
 */
export function isInvalidCode(value) {
  if (isNaN(Number(value))) return true;
  if (Number(value)) return false;
}
