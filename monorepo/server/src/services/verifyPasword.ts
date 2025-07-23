import argon2 from "argon2";

export async function verifyPassword(
  passwordSent: string,
  userPassword: string
): Promise<boolean> {
  return await argon2.verify(userPassword, passwordSent);
}
