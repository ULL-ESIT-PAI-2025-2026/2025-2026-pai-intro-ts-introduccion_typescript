/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc example-interface.ts
 * This file contains a basic example of an interface in TypeScript,
 * defining the structure of an object to ensure type safety.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html}
 */

/**
 * @description Interface that defines the structure of a Task object
 */
interface Task {
  title: string;
  priority: number;
  status: string;
  assignedTo: string;
}

/**
 * @description Main function to demonstrate the use of a basic interface
 */
function main() {
  let currentTask: Task = {
    title: 'Prepare TypeScript Presentation',
    priority: 1,
    status: 'In Progress',
    assignedTo: 'Paulo'
  }

  // Everything within an interface is public by default
  console.log('Current Project Task:');
  console.log(currentTask); 
}

main();