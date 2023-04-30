import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../lib";

const Article = () => {
  const [article, setArticle] = useState(null);
  const { topicId } = useParams();

  useEffect(() => {
    getPost(topicId).then(setArticle);
  }, []);

  return (
    <>
      <h1>Article Page</h1>
      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>{article.body}</p>
        </div>
      )}
    </>
  );
};
export default Article;
