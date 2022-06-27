import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { Users } from "../../Entities/User";
import { UserType } from "../typeDefs/User";
import { comparePassword, hashPassword } from "../../libs/bcrypt";
import { MessageType } from "../typeDefs/Message";

export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { name, username, password } = args;

    const encryptPassword = await hashPassword(password);

    const result = await Users.insert({
      name: name,
      username: username,
      password: encryptPassword,
    });

    return { ...args, id: result.identifiers[0].id, password: encryptPassword };
  },
};

export const DELETE_USER = {
  type: GraphQLBoolean,
  description: "Eliminar un usuario por su id",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, { id }: any) {
    const response = await Users.delete(id);
    if (response.affected === 1) return true;
    return false;
  },
};

export const UPDATE_USER = {
  type: MessageType,
  description: "Actualizar un usuario por su id",
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    input: {
      type: new GraphQLInputObjectType({
        name: "userInput",
        fields: {
          name: { type: GraphQLString },
          username: { type: GraphQLString },
          oldPassword: { type: GraphQLString },
          newPassword: { type: GraphQLString },
        },
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const userFound = await Users.findOneBy({ id: id });

    if (!userFound)
      return {
        succes: false,
        message: "El usuario no existe",
      };

    const isMatch = await comparePassword(
      input.oldPassword,
      userFound?.password as string
    );

    if (!isMatch)
      return { succes: false, message: "Antigua Contraseña incorrecta" };

    const newEncryptPassword = await hashPassword(input.newPassword);

    const response = await Users.update(id, {
      name: input.name,
      username: input.username,
      password: newEncryptPassword,
    });
    if (response.affected === 1)
      return { succes: true, message: "Usuario actualizado" };
    return false;
  },
};
