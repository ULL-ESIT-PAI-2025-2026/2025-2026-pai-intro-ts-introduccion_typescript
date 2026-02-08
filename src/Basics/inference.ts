/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc inference.ts
 * This file demonstrates type inference in TypeScript, where the compiler can automatically
 * determine the type of a variable based on its initial value.
 */

// Explicit Declaration
let myActualName: string = 'Cristobal';

// Type Inference
let myName = 'Cristobal'; // TS knows it is a string
let myAge = 22;           // TS knows it is a number
let isStudent = true;     // TS knows it is a boolean

let mysteriousVariable; // ERROR in strict mode: it is an implicit 'any'

let clearVariable = "Hello"; // OK: TS infers it is a string, not 'any'