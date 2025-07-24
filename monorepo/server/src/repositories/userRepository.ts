import databaseClient from "../../database/client";
import type { Result, Rows } from "../../database/client";

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  is_admin: boolean;
}
interface UserInput {
  name: string;
  email: string;
  password: string;
}
class userRepository {
  //CREATE
  async createUser({ name, email, password }: UserInput) {
    const [result] = await databaseClient.query<Result>(
      "insert into user (name, email, password) values (?, ?, ?)",
      [name, email, password]
    );
    return result.insertId;
  }

  //READs
  async readAllUsers() {
    const [rows] = await databaseClient.query<Rows>(
      "select id, name, email from user"
    );
    return rows as User[];
  }

  async readSingleUser(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select id, name, email from user where id = ?",
      [id]
    );
    return rows[0] as User;
  }

  async readByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email]
    );
    return rows[0] as User;
  }

  //UPDATE

  //DELETE
}

export default new userRepository();
