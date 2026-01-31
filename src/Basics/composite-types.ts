/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc composite-types.ts
 * This file demonstrates different composite types in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


// Enum
enum Role {
  Admin,
  User,
  Guest
}


/**
 * @description Function that demonstrates composite types in TypeScript.
 * It includes examples of object types, arrays, tuples, and enums.
 * @returns void
 */
export function main(): void {
  let user: {
    name: string;
    age: number;
    role: Role;
  } = {
    name: 'Cristóbal Jesús Sarmiento Rodríguez',
    age: 22,
    role: Role.Admin
  };

  // Array
  let scores: number[] = [7, 8, 9];

  // Tuple
  let contact: [string, number] = ['cristobal@email.com', 123456789];

  console.log('User:', user.name);
  console.log('Age:', user.age);
  console.log('Role:', Role[user.role]);
  console.log('Scores:', scores);
  console.log('Email:', contact[0]);
  console.log('Phone:', contact[1]);
}

main();
