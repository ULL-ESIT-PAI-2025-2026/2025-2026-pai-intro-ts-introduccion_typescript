/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc template-with-classes.ts
 * This file demonstrates the use of generics (templates) in TypeScript to 
 * create a reusable result wrapper that can handle any data type.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/generics.html}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Class that represents a result with a success status and a generic payload
 * @template T The type of the data being stored
 */
class GenericResult<T> {
  private timestamp: Date;

  /**
   * @description Constructor of the class GenericResult
   * @param success Whether the operation was successful
   * @param data The payload of type T
   */
  public constructor(
    public success: boolean, 
    private data: T
  ) {
    this.timestamp = new Date();
  }

  /**
   * @description Method to retrieve the stored data
   * @returns The data of type T
   */
  public getPayload(): T {
    return this.data;
  }

  /**
   * @description Method to display result information
   */
  public logResult(): void {
    const status = this.success ? 'SUCCESS' : 'FAILURE';
    console.log(`[${this.timestamp.toISOString()}] Status: ${status}`);
    console.log(`Payload:`, this.data);
  }
}

/**
 * @description Main function to demonstrate the use of templates
 */
function main() {
  const messageResult = new GenericResult<string>(true, 'Operation completed');
  const scoreResult = new GenericResult<number>(true, 95);
  const userResult = new GenericResult<object>(false, { id: 404, error: 'Not Found' });
  messageResult.logResult();
  scoreResult.logResult();
  userResult.logResult();
  const score: number = scoreResult.getPayload();
  console.log(`The final score is: ${score}`);
}

main();