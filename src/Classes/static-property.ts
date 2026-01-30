/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc static-property.ts
 * This file demonstrates the use of static properties and methods in TypeScript 
 * to manage shared class-level data and utility functions.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#static-members}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that manages system file resources
 */
class FileSystemManager {
  // // Static property shared by all instances
  private static activeFilesCount: number = 0;
  public static readonly MAX_STORAGE_GB: number = 512;

  /**
   * @description Constructor that increments the global file counter
   * @param fileName Name of the file being opened
   */
  public constructor(public fileName: string) {
    FileSystemManager.activeFilesCount++;
  }

  /**
   * @description Static method to retrieve the total number of active files
   * @returns The current count of open files across the system
   */
  public static getActiveFiles(): number {
    return FileSystemManager.activeFilesCount;
  }
}

/**
 * @description Main function to demonstrate static member access
 */
function main() {
  const file1 = new FileSystemManager('notes.txt');
  const file2 = new FileSystemManager('index.html');
  const file3 = new FileSystemManager('styles.css');
  console.log(`System Storage Limit: ${FileSystemManager.MAX_STORAGE_GB} GB`);
  console.log(`Total active files in system: ${FileSystemManager.getActiveFiles()}`);
  console.log('Opened files:', file1.fileName, file2.fileName, file3.fileName);
}

main();