/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc commonjs-physics-util.ts
 * This file demonstrates how to export functions and constants using the 
 * CommonJS module system (module.exports) in a Node.js environment.
 * @see {@link https://nodejs.org/api/modules.html#modules-commonjs-modules}
 */

/**
 * @description Calculates the force based on mass and acceleration (F = m * a)
 * @param mass The mass of the object
 * @param acceleration The acceleration applied
 * @returns The resulting force
 */
function calculateForce(mass: number, acceleration: number): number {
  return mass * acceleration;
}

/**
 * @description Constant representing the standard gravity on Earth in m/s²
 */
const GRAVITY_EARTH: number = 9.80665;

/**
 * @description Exporting members using CommonJS syntax
 */
module.exports = {
  calculateForce: calculateForce,
  GRAVITY_EARTH: GRAVITY_EARTH
};