import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS, GET_USER_BY_ID } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";

/**
 *  El RootQuery es el que se encarga de recibir las peticiones de los clientes(consultas base).
 */
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greettings: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUserById: GET_USER_BY_ID,
  },
});

/**
 * Mutation seran todos los metodos que se van a ejecutar en el servidor de mysql
 */
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
  },
});

/* Creando un nuevo objeto GraphQLSchema. */
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
