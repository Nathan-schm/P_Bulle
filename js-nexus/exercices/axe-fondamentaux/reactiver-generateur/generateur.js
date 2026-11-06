// @ts-check

/**
 *  Calcule la quantité d'énergie manquante.
 * @param {number} maxEnergy - énergie max du réacteur
 * @param {number} currentEnergy - énergie acteulle du réacteur
 * @return {number} Energie manquante
 */
export function missingEnergy(maxEnergy, currentEnergy) {
  return maxEnergy - currentEnergy;
}

/**
 * Calcule le pourcentage d'énergie disponible.
 * @param {number} maxEnergy - énergie max du réacteur
 * @param {number} currentEnergy - énergie actuelle du réacteur
 * @return {number} Energie actuelle en %
 */
export function energyPercentage(maxEnergy, currentEnergy) {
  return currentEnergy / (maxEnergy / 100);
}

/**
 * Calcule l'énergie disponible après une recharge.
 * @param {number} currentEnergy
 * @param {number} recharge
 * @return {number} retourne l'énergie après la recharge
 */
export function energyAfterRecharge(currentEnergy, recharge) {
  return currentEnergy + recharge;
}

/**
 * Indique si le générateur possède au moins 500 unités d'énergie.
 * @param {number} currentEnergy
 * @returns si le générateur est prêt ou pas
 */

export function isGeneratorReady(currentEnergy) {
  if (currentEnergy >= 500) return true;
  if (currentEnergy < 500) return false;
}

/**
 * Construit le message d'état du générateur.
 * @param {string} name
 * @param {number} currentEnergy
 * @returns une phrase avec le nom et la quantité d'énergie actuelle
 */
export function generatorStatus(name, currentEnergy) {
  return name + " possède " + currentEnergy + " unités d'énergie.";
}
