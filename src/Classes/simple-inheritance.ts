/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc simple-inheritance.ts
 * This file contains the implementation of a program that demonstrates 
 * simple inheritance in TypeScript by extending a base class.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#inheritance}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Base class that represents a generic electronic device
 */
class ElectronicDevice {
  protected brand: string;

  /**
   * @description Constructor of the class ElectronicDevice
   * @param brand The brand of the device
   */
  public constructor(brand: string) {
    this.brand = brand;
  }

  /**
   * @description Method to simulate powering on the device
   */
  public powerOn(): void {
    console.log(`${this.brand} device is now starting up...`);
  }
}

/**
 * @description Class that represents a Smartphone and extends ElectronicDevice
 */
class Smartphone extends ElectronicDevice {
  private model: string;

  /**
   * @description Constructor of the class Smartphone
   * @param brand The brand of the phone
   * @param model The specific model name
   */
  public constructor(brand: string, model: string) {
    super(brand); 
    this.model = model;
  }

  /**
   * @description Method to simulate making a call
   * @param contact The name of the person to call
   */
  public makeCall(contact: string): void {
    console.log(`${this.brand} ${this.model} is calling ${contact}...`);
  }
}

/**
 * @description Main function to demonstrate simple inheritance
 */
function main() {
  const myPhone = new Smartphone('Apple', 'iPhone 15');
  myPhone.powerOn();
  myPhone.makeCall('Marcos');
}

main();