/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc good-interface-extension.ts
 * This file demonstrates two ways of expanding interfaces in TypeScript:
 * 1. Explicit inheritance using the 'extends' keyword.
 * 2. Declaration merging by defining multiple interfaces with the same name.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#extending-types}
 */

// Example 1: Explicit extension using 'extends'
interface BasicHardware {
  model: string;
  manufacturer: string;
  serialNumber?: string;
}

/**
 * @description Specialized interface that adds warranty details to basic hardware
 */
interface IndustrialHardware extends BasicHardware {
  warrantyYears: number;
  maintenanceInterval: string;
}

// Example 2: Declaration merging (interfaces with the same name)
interface AppSettings {
  theme: 'light' | 'dark';
}

interface AppSettings {
  language: string;
  notificationsEnabled: boolean;
}

/**
 * @description Main function to demonstrate interface extension and merging
 */
function main() {
  let server: IndustrialHardware = {
    model: 'PowerEdge R750',
    manufacturer: 'Dell',
    warrantyYears: 5,
    maintenanceInterval: '6 months',
  };
  let userConfig: AppSettings = {
    theme: 'dark',
    language: 'Spanish',
    notificationsEnabled: true,
  };
  console.log('Hardware Specs:', server);
  console.log('User Configuration:', userConfig);
}

main();