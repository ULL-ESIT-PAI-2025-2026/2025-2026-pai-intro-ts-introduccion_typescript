/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc impossible-intersection-types.ts
 * This file demonstrates a logical error in TypeScript where intersecting 
 * interfaces with conflicting property types results in an unusable 'never' type.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types}
 */

/**
 * @description Interface for internal warehouse tracking
 */
interface WarehouseItem {
  sku: string; // Stock Keeping Unit as string
  stock: number;
}

/**
 * @description Interface for external shipping logistics
 */
interface ShippingLabel {
  sku: number; // Logistics ID as number - Conflict here!
  destination: string;
}

/**
 * @description This intersection creates an impossible type.
 * The property 'sku' becomes (string & number), which simplifies to 'never'.
 */
type ShippedItem = WarehouseItem & ShippingLabel;

/**
 * @description Function that attempts to process a shipped item
 * @param item An object of the impossible intersection type
 */
function processShipment(item: ShippedItem) {
  console.log(`Processing SKU: ${item.sku}`);
}

/**
 * @description Main function to demonstrate the consequences of type collisions
 */
function main() {
  let myPackage: ShippedItem = {
    sku: 'PROD-100', // Error: Type 'string' is not assignable to type 'never'
    stock: 50,
    destination: 'Tenerife'
  };
  console.log('Error: This intersection results in an impossible "never" property.');
}

main();