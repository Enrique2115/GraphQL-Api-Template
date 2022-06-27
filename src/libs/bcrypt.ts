import bcrypt, { compare } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  inputOldPassword: string,
  passwordBD: string
) => await compare(inputOldPassword, passwordBD);
