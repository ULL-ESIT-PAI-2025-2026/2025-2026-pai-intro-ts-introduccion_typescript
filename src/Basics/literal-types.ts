/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc special-types.ts
 * This file demonstrates different special types in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */



type TrafficLight = 'red' | 'yellow' | 'green';

/**
 * @description Function that determines if you can cross the street based on the traffic light color.
 * @param light - The color of the traffic light, which can be 'red', 'yellow', or 'green'.
 * @returns A boolean indicating whether you can cross the street (true for 'green', false for 'red' and 'yellow').
 */
function canCross(light: TrafficLight): boolean {
  return light === 'green';
}


function main() {
  console.log(canCross('green'));  // true
  console.log(canCross('red'));    // false
  //canCross('blue');             // Error
}

main();
