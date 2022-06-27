import { GraphQLString } from "graphql";

/**
 * Definiendo una constante llamada SALUDO. Es un objeto con dos propiedades: type y resolve. 
 * La propiedad de type es GraphQLString. 
 * La propiedad resolve es una función que devuelve la cadena "Hello World".
 */
export const GREETING = {
    type: GraphQLString,
    resolve: () => "Hello World"
}