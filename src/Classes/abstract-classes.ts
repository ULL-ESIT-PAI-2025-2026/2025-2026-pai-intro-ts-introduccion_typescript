/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc abstract-classes.ts
 * This file demonstrates the use of abstract classes in TypeScript to define 
 * a common structure for different geometric shapes that require specific 
 * implementations for area calculation.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#abstract-classes-and-members}
 * @see {@link https://www.npmjs.com/package/@types/readline-sync}
 */

/**
 * @description Abstract class that defines the structure of a geometric shape
 */
abstract class Shape {
  protected shapeName: string;

  /**
   * @description Constructor of the class Shape
   * @param shapeName The name of the shape
   */
  protected constructor(shapeName: string) {
    this.shapeName = shapeName;
  }

  /**
   * @description Abstract method to calculate the area, to be implemented by subclasses
   * @returns The calculated area of the shape
   */
  public abstract getArea(): number;

  /**
   * @description Method that prints the description of the shape to the console
   */
  public displayInfo(): void {
    console.log(`This is a ${this.shapeName} and its area is: ${this.getArea()}`);
  }
}

/**
 * @description Subclass that extends Shape and implements the logic for a Circle
 */
class Circle extends Shape {
  /**
   * @description Constructor for Circle
   * @param radius The radius of the circle
   */
  public constructor(private radius: number) {
    super('Circle');
  }

  /**
   * @description Implementation of getArea for a circle
   * @returns The area using the formula π * r²
   */
  public getArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

/**
 * @description Subclass that extends Shape and implements the logic for a Rectangle
 */
class Rectangle extends Shape {
  /**
   * @description Constructor for Rectangle
   * @param width The width of the rectangle
   * @param height The height of the rectangle
   */
  public constructor(private width: number, private height: number) {
    super('Rectangle');
  }

  /**
   * @description Implementation of getArea for a rectangle
   * @returns The area using the formula width * height
   */
  public getArea(): number {
    return this.width * this.height;
  }
}

/**
 * @description Main function to demonstrate the use of abstract classes
 */
function main() {
  // We cannot do: const shape = new Shape('Generic'); // ❌ Error: Cannot create an instance of an abstract class.

  const myCircle = new Circle(5);
  const myRectangle = new Rectangle(10, 4);
  myCircle.displayInfo();
  myRectangle.displayInfo();
}

main();