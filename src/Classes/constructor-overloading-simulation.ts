/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc constructor-overloading-simulation.ts
 * This file demonstrates how to simulate constructor overloading in TypeScript 
 * by using optional parameters to allow different ways of initializing an object.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a game character
 */
class GameCharacter {
  private nickname: string;
  private level: number;
  private classType: string;

  /**
   * @description Constructor of the class GameCharacter
   * @param nickname The unique name of the character
   * @param level Initial level (optional)
   * @param classType Character class like 'Warrior' or 'Mage' (optional)
   */
  public constructor(nickname: string, level?: number, classType?: string) {
    this.nickname = nickname;
    // Manual default value assignment if parameters are missing
    this.level = level || 1; 
    this.classType = classType || 'Adventurer'; 
  }

  /**
   * @description Method that prints the character's stats to the console
   */
  public displayStats(): void {
    console.log(`Character: ${this.nickname} | Level: ${this.level} | Class: ${this.classType}`);
  }
}

/**
 * @description Main function to demonstrate constructor overloading simulation
 */
function main() {
  const character1 = new GameCharacter('DragonSlayer', 50, 'Paladin');
  const character2 = new GameCharacter('ShadowStep', 10);
  const character3 = new GameCharacter('Newbie');

  character1.displayStats();
  character2.displayStats();
  character3.displayStats();
}

main();