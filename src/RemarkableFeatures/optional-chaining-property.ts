/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc optional-chaining-property.ts
 * This file demonstrates the use of optional chaining in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */



/**
 * @description Function that demonstrates the use of optional chaining in TypeScript.
 * Optional chaining allows you to safely access nested properties of an object without having to check if each level exists.
 * If any part of the chain is null or undefined, the entire expression will return undefined instead of throwing an error.
 * @returns void
 **/
function optionalChainingExample(): void {
  let user: {
    name: string;
    address?: {
      city?: string;
    };
  } = {
    name: 'Ana'
  };

  let city = user.address?.city;

  console.log(city); // undefined, no error
}

optionalChainingExample();
