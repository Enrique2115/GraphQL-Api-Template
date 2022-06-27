import { GraphQLID, GraphQLList, GraphQLNonNull } from "graphql";
import { Users } from "../../Entities/User";
import { UserType } from "../typeDefs/User";

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  description: "Listar todos los usuarios",
  async resolve() {
    return await Users.find();
  },
};

export const GET_USER_BY_ID = {
  type: UserType,
  description: "Seleccionar un usuario por su id",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    return await Users.findOneBy({ id: args.id });
  },
};
