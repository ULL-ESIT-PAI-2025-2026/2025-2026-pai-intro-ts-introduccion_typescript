/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc without-parameter-properties.ts
 * This file demonstrates the implementation of a program that 
 * declares class attributes with access modifiers outside the 
 * constructor parameters in TypeScript. [cite: 53, 54]
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html}
 */

/**
 * @description Class that represents a space mission
 */
class SpaceMission {
  private missionName: string;
  private launchYear: number;
  private destination: string;

  /**
   * @description Constructor of the class SpaceMission
   * @param missionName Name of the mission
   * @param launchYear Year of launch
   * @param destination Target planet or location
   */
  public constructor(missionName: string, launchYear: number, destination: string) {
    // Manual assignment using the 'this' reference
    this.missionName = missionName;
    this.launchYear = launchYear;
    this.destination = destination;
  }

  /**
   * @description Method that prints the mission details to the console
   */
  public displayMissionInfo(): void {
    console.log(`Mission: ${this.missionName}, Launch Year: ${this.launchYear}, Destination: ${this.destination}`);
  }
}

/**
 * @description Main function to demonstrate explicit member declaration
 */
function main() {
  let mission = new SpaceMission('Artemis II', 2025, 'Moon');
  mission.displayMissionInfo();
}

main();