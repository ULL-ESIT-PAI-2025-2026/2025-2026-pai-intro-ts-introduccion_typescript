/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 29 de Enero, 2026
 * @desc with-parameter-properties.ts
 * This file demonstrates how to use Parameter Properties to 
 * simplify class definitions by declaring and initializing 
 * members directly in the constructor.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties}
 */

/**
 * @description Class that represents a Course using Parameter Properties
 */
class Course {
  /**
   * @description By adding access modifiers to parameters, TypeScript 
   * automatically creates and assigns class properties.
   * @param title Public property: accessible from anywhere.
   * @param code Private property: only accessible within this class.
   * @param credits Protected property: accessible here and in subclasses.
   */
  public constructor(
    public title: string,
    private code: string,
    protected credits: number
  ) {
    // No need for: this.title = title;
    // TS automates the member initialization.
  }

  /**
   * @description Displays course details in the console.
   */
  public displayInfo(): void {
    console.log(`Course: ${this.title} (Code: ${this.code}) - ${this.credits} ECTS`);
  }
}

/**
 * @description Main execution function
 */
function main() {
  const myCourse = new Course('Interactive Applications', 'PAI-101', 6);
  
  myCourse.displayInfo();

  // Valid: title is public
  console.log(`The course title is: ${myCourse.title}`); 

  // ❌ Error: 'code' is private and only visible within class 'Course'
  // console.log(myCourse.code); 

  // ❌ Error: 'credits' is protected and only visible within class 'Course' and its subclasses
  // console.log(myCourse.credits); 
}

main();