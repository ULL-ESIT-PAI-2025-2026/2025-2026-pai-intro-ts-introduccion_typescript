/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc readonly-member-safety.ts
 * This file demonstrates the usage of the 'readonly' modifier in TypeScript 
 * to ensure that class properties remain immutable after their initial assignment.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly}
 */

/**
 * @description Class representing a library book with a fixed identifier
 */
class LibraryBook {
  public readonly ISBN: string = '978-3-16-148410-0';
}

/**
 * @description Main function to demonstrate readonly property protection
 */
function main() {
  let myBook = new LibraryBook();
  
  // ❌ Compilation Error: Cannot assign to 'ISBN' because it is a read-only property.
  myBook.ISBN = '978-0-545-01022-1'; 
}

main();