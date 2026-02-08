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


type ID = string | number;

type User = {
  id: ID;
  name: string;
  active: boolean;
};

/**
 * @description Function that describes a user based on their active status.
 * @param user - The user object containing id, name, and active status.
 * @returns A string describing whether the user is active or inactive.
 */
function describeUser(user: User): string {
  return user.active
    ? `${user.name} is an active user`
    : `${user.name} is inactive`;
}


function main() {
  const user1: User = { id: 1, name: 'Ana', active: true };
  const user2: User = { id: 'A-23', name: 'Luis', active: false };

  console.log(describeUser(user1));
  console.log(describeUser(user2));
}

main();
