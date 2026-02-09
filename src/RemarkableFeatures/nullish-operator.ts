/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc nullish-operator.ts
 * This file demonstrates the use of the nullish coalescing operator in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * @description Function that demonstrates the use of the nullish coalescing operator in TypeScript.
 * The nullish coalescing operator (??) allows you to provide a default value when dealing with null or undefined.
 * It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns the left-hand side operand.
 * @returns void
 **/
function nullishCoalescingExample(): void {
  let input: string | null = null;

  let username = input ?? 'Guest';
  console.log(username);
}

nullishCoalescingExample();
