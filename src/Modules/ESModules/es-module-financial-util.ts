/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc es-module-financial-util.ts
 * This file demonstrates how to export functions and constants using the 
 * ECMAScript Module (ESM) system (export keyword) in TypeScript.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules}
 */

/**
 * @description Converts an amount from one currency to another based on a rate
 * @param amount The initial amount of money
 * @param rate The current exchange rate
 * @returns The converted amount
 */
export function convertCurrency(amount: number, rate: number): number {
  return amount * rate;
}

/**
 * @description Constant representing the current USD to EUR exchange rate
 */
export const USD_TO_EUR_RATE = 0.92;