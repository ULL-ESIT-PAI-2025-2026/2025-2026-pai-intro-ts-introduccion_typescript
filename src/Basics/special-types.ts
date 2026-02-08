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
 * @description Function that demonstrates special types in TypeScript.
 * It includes examples of any, unknown, null, undefined, void, and never types.
 * @returns void
 */
function exampleSpecialTypes(): void {
  // any
  let valueAny: any = 10;
  valueAny = 'Hello';
  valueAny = true;

  // unknown
  let valueUnknown: unknown = 'TypeScript';
  if (typeof valueUnknown === 'string') {
    console.log(valueUnknown.toUpperCase());
    // Thats returns 'TYPESCRIPT'
  }

  // null and undefined
  let empty: null = null;
  let notDefined: undefined = undefined;

  console.log('Null value: ', empty);
  // Thats returns 'Null value: null'
  console.log('Undefined value: ', notDefined);
  // Thats returns 'Undefined value: undefined'

  // void
  function logMessage(message: string): void {
    console.log(message);
    // Thats returns the message passed as an argument,
    // but the function itself returns nothing.
  }

  logMessage('This function returns nothing');

  // never
  function throwError(message: string): never {
    throw new Error(message);
    // This function always throws an error and never returns a value.
  }

  // Uncomment to test never
  throwError('Something went wrong');
}

exampleSpecialTypes();
