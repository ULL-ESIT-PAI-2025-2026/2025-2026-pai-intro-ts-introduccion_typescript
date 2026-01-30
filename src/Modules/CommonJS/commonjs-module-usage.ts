/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc commonjs-module-usage.ts
 * In this file you will find a example of CommonJS import.
 */

const physicsModule = require('./commonjs-physics-util');

function main() {
  console.log(physicsModule.calculateForce(70, 9.8)); // 686
  console.log(physicsModule.GRAVITY_EARTH); // 9.80665
}

main();