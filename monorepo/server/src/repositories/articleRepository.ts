import databaseClient from "../../database/client";
import type { Result, Rows } from "../../database/client";
import { ResultSetHeader } from "mysql2";

interface Article {
  id: number;
  title: string;
  content: string;
  user_id: number;
}
interface ArticleInput {
  title: string;
  preview_img: string;
  content: string;
  user_id: number;
}
//CREATE
class articleRepository {
  async createArticle({ title, preview_img, content, user_id }: ArticleInput) {
    const [result] = await databaseClient.query<Result>(
      "insert into article (title, preview_img, content, user_id) values (?, ?, ?, ?)",
      [title, preview_img, content, user_id]
    );
    return result.insertId;
  }

  //READs
  async readAllArticles() {
    const [rows] = await databaseClient.query<Rows>(
      "select article.id, article.preview_img, article.title, article.content, user.name as username from article inner join user on user_id = user.id"
    );
    return rows as Article[];
  }
  async readSingleArticle(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select id, preview_img, title, content from article where id = ?",
      [id]
    );
    return rows[0] as Article;
  }
  async readArticlesByUser(user_id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select id, preview_img, title, content from article where user_id = ?",
      [user_id]
    );
    return rows as Article[];
  }
  //DELETE
  async deleteUserArticle(article_id: number, user_id: number) {
    const [result] = await databaseClient.query<ResultSetHeader>(
      "delete from article where article.id = ? and user_id = ?",
      [article_id, user_id]
    );
    if (result.affectedRows === 0) {
      throw new Error("article inexistant ou acces non autorisé");
    }
    return result;
  }
}
export default new articleRepository();
