/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 31 de Enero, 2026
 * @desc super-usage.ts
 * This file contains the implementation of a program that
 * demonstrates the use of the super keyword in TypeScript class hierarchies.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Base class representing a generic vehicle
 */
class Vehicle {
  protected brand: string;
  protected maxSpeed: number;

  /**
   * @description Constructor for the Vehicle class
   * @param brand The brand of the vehicle
   * @param maxSpeed The top speed in km/h
   */
  public constructor(brand: string, maxSpeed: number) {
    this.brand = brand;
    this.maxSpeed = maxSpeed;
  }

  /**
   * @description Returns technical specifications
   * @returns A string with basic vehicle data
   */
  public getSpecs(): string {
    return `Brand: ${this.brand}, Top Speed: ${this.maxSpeed}km/h.`;
  }
}

/**
 * @description Specialized class for racing cars that extends Vehicle
 */
class RaceCar extends Vehicle {
  private teamName: string;

  /**
   * @description Constructor for the RaceCar class
   * @param brand The vehicle brand
   * @param maxSpeed The vehicle top speed
   * @param teamName The name of the racing team
   */
  public constructor(brand: string, maxSpeed: number, teamName: string) {
    console.log(`Initializing racing systems for: ${brand}`); 
    super(brand, maxSpeed);
    this.teamName = teamName; 
  }

  /**
   * @description Overridden method to include racing details
   * @returns Full specifications including team info
   */
  public getSpecs(): string {
    return `${super.getSpecs()} Competes for team: ${this.teamName}.`;
  }
}

function main() {
  const f1Car = new RaceCar('Red Bull', 350, 'Oracle Red Bull Racing');
  console.log(f1Car.getSpecs());
}

main();