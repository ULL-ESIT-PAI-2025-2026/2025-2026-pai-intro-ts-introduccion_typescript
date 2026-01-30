/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc property-accessors.ts
 * This file demonstrates the use of accessors (getters and setters) in TypeScript 
 * to control how class properties are accessed and modified.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a weather sensor
 */
class WeatherSensor {
  /**
   * @description Constructor of the class WeatherSensor
   * @param temperature internal value in Celsius
   */
  public constructor(private temperature: number) {}

  /**
   * @description Getter for the temperature property
   * @returns The current temperature
   */
  public get getTemperature(): number {
    return this.temperature;
  }

  /**
   * @description Setter for the temperature property with basic validation
   * @param newValue The new temperature value to set
   */
  public set setTemperature(newValue: number) {
    if (newValue < -273.15) {
      console.log('Error: Temperature below absolute zero is not possible.');
      return;
    }
    this.temperature = newValue;
  }
}

/**
 * @description Main function to demonstrate the use of accessors
 */
function main() {
  const sensor = new WeatherSensor(25);
  console.log(`Current temperature: ${sensor.getTemperature}°C`);
  sensor.setTemperature = 30;
  console.log(`Updated temperature: ${sensor.getTemperature}°C`);
  sensor.setTemperature = -500; 
}

main();