import { GraphQLBoolean, GraphQLObjectType, GraphQLString } from "graphql";

export const MessageType = new GraphQLObjectType({
  name: "Message",
  fields: {
    succes: { type: GraphQLBoolean },
    message: { type: GraphQLString },
  },
});
