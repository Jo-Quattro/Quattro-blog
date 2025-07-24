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
class articleRepository {
  async createArticle({ title, content, user_id }: ArticleInput) {
    const [result] = await databaseClient.query<Result>(
      "insert into article (title, content, user_id) values (?, ?, ?)",
      [title, content, user_id]
    );
    return result.insertId;
  }
}
export default new articleRepository();
