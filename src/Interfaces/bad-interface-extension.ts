/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc invalid-interface-overriding.ts
 * This file demonstrates incorrect practices when extending or merging 
 * interfaces in TypeScript, specifically focusing on type conflicts.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types}
 */

// Example 1: Invalid extension using 'extends'
interface BaseMedia {
  title: string;
  duration: number;
}

interface DetailedVideo extends BaseMedia {
  // ❌ Error: Interface 'DetailedVideo' incorrectly extends interface 'BaseMedia'.
  // Types of property 'duration' are incompatible.
  duration: string; 
  resolution: string;
}

// Example 2: Invalid declaration merging (same name, conflicting types)
interface StreamAccount {
  userId: string;
}

interface StreamAccount {
  // ❌ Error: Subsequent property declarations must have the same type.
  userId: number; 
}

/**
 * @description Main function to demonstrate the consequences of invalid extensions
 */
function main() {  
  let myVideo: DetailedVideo = {
    title: 'TypeScript Tutorial',
    duration: '10:30', // Incompatible with BaseMedia
    resolution: '1080p'
  };
  let account: StreamAccount = {
    userId: 12345 // Conflict between string and number definitions
  };
  console.log('This file contains intentional type conflicts to demonstrate invalid practices.');
}

main();