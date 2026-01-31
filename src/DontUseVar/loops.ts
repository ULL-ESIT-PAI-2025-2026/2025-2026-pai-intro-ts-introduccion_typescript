/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc block-scope.ts
 * This file demonstrates why using 'var' is discouraged in TypeScript due to its function-scoped nature.
 * Instead, 'let' and 'const' should be used for block scoping.
 * @see {@link https://www.typescriptlang.org/docs/handbook/variable-declarations.html#let}
 * @see {@link https://www.typescriptlang.org/docs/handbook/variable-declarations.html#const}
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


function loopVarExample(): void {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}
// Output: 3, 3, 3 


function loopLetExample(): void {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 100);
  }
}
// Output: 0, 1, 2

loopVarExample();
loopLetExample();