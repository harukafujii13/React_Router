import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../lib";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    getPosts().then(setArticles);
  }, []);

  return (
    <>
      <h1>Article Page: {topicId}</h1>
      {articles &&
        articles.map((art) => (
          <div key={art.id}>
            <Link to={`/post/${art.id}`}>
              <h5>{art.title}</h5>
            </Link>
          </div>
        ))}
    </>
  );
};

export default Articles;
