import databaseClient from "../../database/client";
import type { Result, Rows } from "../../database/client";

interface Article {
  id: number;
  title: string;
  content: string;
  user_id: number;
}
interface ArticleInput {
  title: string;
  content: string;
  user_id: number;
}
//CREATE
class articleRepository {
  async createArticle({ title, content, user_id }: ArticleInput) {
    const [result] = await databaseClient.query<Result>(
      "insert into article (title, content, user_id) values (?, ?, ?)",
      [title, content, user_id]
    );
    return result.insertId;
  }

  //READs
  async readAllArticles() {
    const [rows] = await databaseClient.query<Rows>(
      "select id, title, content from article"
    );
    return rows as Article[];
  }

  async readSingleArticle(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select id, title, content from article where id = ?",
      [id]
    );
    return rows[0] as Article;
  }
}
export default new articleRepository();
