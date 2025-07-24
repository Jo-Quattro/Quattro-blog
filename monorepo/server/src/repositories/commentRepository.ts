import databaseClient from "../../database/client";
import type { Result } from "../../database/client";

interface CommentInput {
  text: string;
  user_id: number;
  article_id: number;
}

class CommentRepository {
  async createComment({ text, user_id, article_id }: CommentInput) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO comment (text, user_id, article_id) VALUES (?, ?, ?)",
      [text, user_id, article_id]
    );
    return result.insertId;
  }
}

export default new CommentRepository();
