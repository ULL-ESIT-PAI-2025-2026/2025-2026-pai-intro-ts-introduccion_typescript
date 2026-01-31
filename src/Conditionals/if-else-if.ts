/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc if-else-if.ts
 * This file demonstrates the use of if-else-if conditionals in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


function elseIfExample(): void {
  let grade: number = 7;

  if (grade >= 9) {
    console.log('Excellent');
  } else if (grade >= 5) {
    console.log('Passed');
  } else {
    console.log('Failed');
  }
}

elseIfExample();
