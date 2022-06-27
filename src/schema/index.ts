import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { GREETING } from "./Queries/Greeting"

/* Creando un nuevo GraphQLObjectType llamado RootQuery. */
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        greettings: GREETING
    }
})

/* Creando un nuevo objeto GraphQLSchema. */
export const schema = new GraphQLSchema({
    query: RootQuery,
    // mutation:{}
})

