/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc type-assertion.ts
 * This file demonstrates the use of type assertions in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * This function demonstrates the use of type assertions in TypeScript.
 * Type assertions allow you to tell the compiler that you know the type of a value better than it does.
 * This can be useful when you have information about the type that the compiler cannot infer on its own.
 * @returns void
 */
function typeAssertionExample(): void {
  let value: unknown = 'Hello TypeScript';

  let length: number = (value as string).length;
  console.log(length);
}

typeAssertionExample();
