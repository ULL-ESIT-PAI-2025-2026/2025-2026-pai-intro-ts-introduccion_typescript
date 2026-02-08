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


/**
 * @description Demonstrates composite types with real usage.
 */
function compositeTypes(): void {

  // Enum
  enum Role {
    Admin,
    User,
    Guest
  };

  // Object
  let user: {
    name: string;
    age: number;
    role: Role;
  } = {
    name: 'Cristóbal',
    age: 22,
    role: Role.Admin
  };

  // Array
  let scores: number[] = [7, 8, 9, 6];

  // Tuple
  let contact: [string, number] = ['cristobal@email.com', 123456789];

  // --- Using the enum ---
  if (user.role === Role.Admin) {
    console.log('Access granted: Admin user');
  } else {
    console.log('Limited access');
  }

  // --- Using the array ---
  let sum = 0;
  let average = 0;
  for (let score of scores) {
    sum += score;
  }
  average = (sum / scores.length);

  if (average >= 7) {
    console.log('Average score is good:', average);
  } else {
    console.log('Average score is low:', average);
  }

  // --- Using the tuple ---
  let email = contact[0];
  let phone = contact[1];

  console.log('Contact email:', email);
  console.log('Contact phone:', phone);

  // --- Using object properties ---
  if (user.age >= 18) {
    console.log(user.name, 'is an adult');
  }
}

// Run the function to demonstrate composite types
compositeTypes();

