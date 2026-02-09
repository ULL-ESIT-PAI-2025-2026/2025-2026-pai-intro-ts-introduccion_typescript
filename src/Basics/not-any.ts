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


/**
 * @description Function that demonstrates the use of the 'any' type in TypeScript.
 * The 'any' type allows a variable to hold any type of value, which can lead to runtime errors if not used carefully.
 * In this example, we simulate a login function that accepts a password. If the password is not a string, it will cause
 * an error at runtime.
 * @returns void
 * @param password - A password that can be of any type, which is not recommended in practice.
 */
function loginWithAny(password: any): void {
  // TypeScript allows this, even if password is not a string
  if (password.length >= 8) {
    console.log('Password accepted');
  } else {
    console.log('Password too short');
  }
}


/**
 * @description Function that demonstrates the use of union types in TypeScript.
 * @returns void
 * @param password - A password that can be either a string or a number.
 **/
function loginWithUnion(password: string | number): void {
  const passwordAsString: string = password.toString();

  if (passwordAsString.length >= 8) {
    console.log('Password accepted');
  } else {
    console.log('Password too short');
  }
}


function main() {
  // Simulating user input (with any type, which is not recommended)
  loginWithAny(true);      // Compiles, but crashes at runtime
  loginWithAny('12345678'); // Works

  // Simulating user input (with union type, which is safer)
  // loginWithUnion(true); // Error
  loginWithUnion(12345678);
  loginWithUnion('password');
}

main();
