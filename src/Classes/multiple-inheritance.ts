/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc multiple-inheritance-simulation.ts
 * This file demonstrates how to simulate multiple inheritance in TypeScript 
 * by extending a base class and implementing an interface simultaneously.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#inheritance}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Interface that defines GPS capabilities
 */
interface GPSInterface {
  /**
   * @description Method to retrieve the current coordinates
   * @returns A string with the location data
   */
  getLocation(): string;
}

/**
 * @description Base class that represents a generic vehicle
 */
class VehicleBase {
  /**
   * @description Constructor of the class VehicleBase
   * @param id Unique identification for the vehicle
   */
  public constructor(public id: string) {}

  /**
   * @description Method to simulate movement
   */
  public move(): void {
    console.log(`Vehicle ${this.id} is in transit.`);
  }
}

/**
 * @description Class that represents a drone, combining vehicle logic and GPS interface
 */
class AutonomousDrone extends VehicleBase implements GPSInterface {
  /**
   * @description Constructor of the class AutonomousDrone
   * @param id Identification string
   * @param model Specific model of the drone
   */
  public constructor(id: string, public model: string) {
    super(id);
  }

  /**
   * @description Implementation of the GPSInterface method
   * @returns Current coordinates string
   */
  public getLocation(): string {
    return '40.7128° N, 74.0060° W';
  }

  /**
   * @description Method specific to the drone class
   */
  public fly(): void {
    console.log(`${this.model} is now airborne.`);
  }
}

/**
 * @description Main function to demonstrate the simulation of multiple inheritance
 */
function main() {
  const myDrone = new AutonomousDrone('DRN-042', 'SkyMaster X1');
  myDrone.move();
  myDrone.fly();
  console.log(`Current Location: ${myDrone.getLocation()}`);
}

main();