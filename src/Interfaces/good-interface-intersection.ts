/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2025-2026
 *
 * @authors Paulo Padilla Domingues, Cristóbal Jesús Sarmiento Rodríguez, Marcos Llinares Montes.
 * @since 30 de Enero, 2026
 * @desc good-interface-intersections.ts
 * This file demonstrates the use of intersection types (&) in TypeScript 
 * to combine multiple interface definitions into a single, cohesive type.
 * @see {@link https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types}
 */

/**
 * @description Interface that defines basic user identity
 */
interface UserIdentity {
  username: string;
  email: string;
}

/**
 * @description Interface that defines access level permissions
 */
interface AccessLevel {
  role: 'admin' | 'guest' | 'editor';
  permissions: string[];
}

/**
 * @description Intersection type that combines identity and permissions
 */
type AuthenticatedUser = UserIdentity & AccessLevel;

/**
 * @description Function that processes an authenticated user
 * @param user An object that must satisfy both UserIdentity and AccessLevel
 */
function authorizeAccess(user: AuthenticatedUser): void {
  console.log(`Authorizing ${user.username} (${user.email}) as ${user.role}...`);
  console.log(`Active permissions: ${user.permissions.join(', ')}`);
}

/**
 * @description Main function to demonstrate interface intersections
 */
function main() {
  let adminUser: AuthenticatedUser = {
    username: 'paulo_padilla',
    email: 'alu0101571836@ull.edu.es',
    role: 'admin',
    permissions: ['read', 'write', 'delete', 'execute']
  };
  authorizeAccess(adminUser);
}

main();