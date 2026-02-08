/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc basic-types.ts
 * This file demonstrates differents basics types in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * @description Function that demonstrates basic types in TypeScript.
 * It declares variables of type string, number, and boolean, and prints them to the console.
 * @returns void
 */
function basicTypes(): void {
  let myName: string = 'Cristóbal';
  let myAge: number = 22;
  let isStudent: boolean = true;

  // String operations
  let upperName: string = myName.toUpperCase();
  let nameLength: number = myName.length;

  // Number operations
  let ageNextYear: number = myAge + 1;
  let isAdult: boolean = myAge >= 18;

  // Boolean usage
  let status: string;
  if (isStudent && isAdult) {
    status = 'Adult student';
  } else if (isStudent) {
    status = 'Student';
  } else {
    status = 'Not a student';
  }

  console.log(`Name: ${upperName} (${nameLength} characters)`);
  console.log(`Age: ${myAge}, Next year: ${ageNextYear}`);
  console.log(`Is adult: ${isAdult}`);
  console.log(`Status: ${status}`);
}

basicTypes();
