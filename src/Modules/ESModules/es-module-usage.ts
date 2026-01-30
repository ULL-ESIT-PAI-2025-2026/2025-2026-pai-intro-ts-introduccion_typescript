/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc es-module-usage.ts
 * In this file you will find an example of ES Modules import, demonstrating 
 * how to consume specific exported members from an external financial utility.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import}
 */

import { convertCurrency, USD_TO_EUR_RATE } from './es-module-financial-util';

/**
 * @description Main function to demonstrate the consumption of ES Modules
 */
function main() {
  const travelBudgetUSD: number = 1500;
  const budgetInEUR = convertCurrency(travelBudgetUSD, USD_TO_EUR_RATE);
  console.log(`Initial budget: $${travelBudgetUSD} USD`);
  console.log(`Current exchange rate: ${USD_TO_EUR_RATE}`);
  console.log(`Total budget for the trip: ${budgetInEUR.toFixed(2)}€ EUR`);
}

main();