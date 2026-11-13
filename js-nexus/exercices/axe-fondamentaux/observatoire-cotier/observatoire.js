// @ts-check

import { isNull, isUndefined } from "../diagnostic-noyau/diagnostic";

/**
 * Retourne le type JavaScript de la donnée.
 * @param {*} value
 * @returns *
 */
export function dataType(value) {
  return typeof value;
}

/**
 * Indique si le comptage vaut undefined.
 * @param {*} count
 * @returns undefined
 */
export function isNotTransmitted(count) {
  return isUndefined(count);
}

/**
 * Indique si le comptage vaut null.
 * @param {*} count
 * @returns IsNull
 */
export function isOffline(count) {
  return isNull(count);
}

/**
 * Indique si un comptage est disponible, c'est-à-dire
 * différent de undefined et de null.
 * @param {*} count
 * @returns *
 */
export function hasBirdCount(count) {
  return !isNull(count) && !isUndefined(count);
}

/**
 * Additionne les deux comptages.
 * Un comptage indisponible compte pour 0.
 * @param {*} northCount
 * @param {*} southCount
 * @returns Number
 */
export function totalBirds(northCount, southCount) {
  if (northCount == undefined || northCount == null) northCount = 0;
  if (southCount == undefined || southCount == null) southCount = 0;
  return northCount + southCount;
}

/**
 * Indique si la hauteur est de type number et n'est pas NaN.
 * @param {*} height
 * @returns *
 */
export function isValidWaveHeight(height) {
  return height == Number(height) && typeof height == "number";
}
