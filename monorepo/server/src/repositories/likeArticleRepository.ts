import { ResultSetHeader } from "mysql2";
import databaseClient from "../../database/client";
import type { Result, Rows } from "../../database/client";

class likeArticleRepository {
  async findByUserAndArticle(userId: number, articleId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM article_likes WHERE user_id = ? AND article_id = ?",
      [userId, articleId]
    );
    return rows[0];
  }
  async createLike(userId: number, articleId: number) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO article_likes (user_id, article_id) VALUES (?, ?)",
      [userId, articleId]
    );
    return result.insertId;
  }
  //DELETE
  async removeLike(userId: number, articleId: number) {
    const [result] = await databaseClient.query<ResultSetHeader>(
      "DELETE FROM article_likes WHERE user_id = ? AND article_id = ?",
      [userId, articleId]
    );
    return result;
  }
  //COUNT
  async countLikes(articleId: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT COUNT(*) as count FROM article_likes WHERE article_id = ?",
      [articleId]
    );
    return rows[0].count;
  }
}
export default new likeArticleRepository();
