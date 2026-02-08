/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc union-types.ts
 * This file demonstrates different special types in TypeScript.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */


/**
 * @description Function that formats an ID which can be either a string or a number.
 * @param id - The ID to format, which can be a string or a number.
 * @returns A formatted string representation of the ID.
 */
function formatId(id: string | number): string {
  if (typeof id === 'number') {
    return `ID-${id.toString().padStart(4, '0')}`;
  } else {
    return id.toUpperCase();
  }
}

//console.log(formatId(23));      // ID-0023
//console.log(formatId('ab-45')); // AB-45





/**
 * @description Function that calculates a value based on whether the input is a string or a number.
 * @param value - The value to calculate, which can be a string or a number.
 * @returns A number that is either the length of the string or double the number.
 */
function calculate(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  }
  return value * 2;
}

// calculate(true); // Compile-time error
//console.log(calculate('TypeScript')); // 10
//console.log(calculate(5));            // 10






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

//const user1: User = { id: 1, name: 'Ana', active: true };
//const user2: User = { id: 'A-23', name: 'Luis', active: false };

//console.log(describeUser(user1));
//console.log(describeUser(user2));





type TrafficLight = 'red' | 'yellow' | 'green';

/**
 * @description Function that determines if you can cross the street based on the traffic light color.
 * @param light - The color of the traffic light, which can be 'red', 'yellow', or 'green'.
 * @returns A boolean indicating whether you can cross the street (true for 'green', false for 'red' and 'yellow').
 */
function canCross(light: TrafficLight): boolean {
  return light === 'green';
}

//console.log(canCross('green'));  // true
//console.log(canCross('red'));    // false
// canCross('blue');             // Error
