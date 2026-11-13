// @ts-check

// TODO : déclarer la constante de conversion entre les km/h et les m/s

/**
 * Convertit une vitesse de km/h en m/s.
 * @param {*} speedKmh
 * @returns
 */
export function kmhToMs(speedKmh) {
  const mps = 3.6;
  return speedKmh / mps;
}

/**
 * Calcule l'écart entre une rafale et le vent moyen.
 * @param {*} gustKmh
 * @param {*} averageKmh
 * @returns
 */
export function gustGap(gustKmh, averageKmh) {
  return gustKmh - averageKmh;
}

/**
 * Calcule la moyenne de trois mesures.
 * @param {*} speed1
 * @param {*} speed2
 * @param {*} speed3
 * @returns
 */
export function averageOfThree(speed1, speed2, speed3) {
  return (speed1 + speed2 + speed3) / 3;
}

/**
 * Indique si le vent atteint au moins 75 km/h.
 * @param {*} speedKmh
 * @returns
 */
export function isStormAlert(speedKmh) {
  return speedKmh >= 75;
}

/**
 * Construit le bulletin météo d'une station.
 */
export function windReport(station, speedKmh) {
  const mps = 3.6;
  let parseconde = speedKmh / mps;
  return (
    station + " : vent de " + speedKmh + " km/h" + " (" + parseconde + " m/s)."
  );
}
