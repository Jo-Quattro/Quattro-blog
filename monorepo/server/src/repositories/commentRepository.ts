import databaseClient from "../../database/client";
import type { Result } from "../../database/client";

class CommentRepository {
  async createComment(text: string, user_id: number, article_id: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO comment (text, user_id, article_id) VALUES (?, ?, ?)",
      [text, user_id, article_id]
    );
    return result.insertId;
  }
  async readCommentsArticle(article_id: number) {
    const [result] = await databaseClient.query<Result>(
      `SELECT 
        comment.id,
        comment.text, 
        comment.creation_date, 
        user.name AS user_name, 
        article.id AS article_id 
      FROM comment 
      INNER JOIN user ON comment.user_id = user.id 
      INNER JOIN article ON comment.article_id = article.id 
      WHERE article.id = ?`,
      [article_id]
    );
    return result;
  }
}

export default new CommentRepository();
