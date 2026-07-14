import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

 useEffect(() => {
  axios
    .get("http://localhost:8080/news")
    .then((res) => {
      setNews(res.data);
    })
    .catch((err) => console.log(err));
}, []);

  return (
    <>
      <h3 className="title">Market News</h3>

      <div className="news-container">
  {news.length === 0 ? (
    <h4>Loading latest market news...</h4>
  ) : (
    news.map((article, index) => (
      <div
        key={index}
        style={{
          padding: "18px 0",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <h5
          style={{
            marginBottom: "8px",
            fontWeight: "600",
          }}
        >
          ● {article.title}
        </h5>

        <small
          style={{
            color: "#888",
          }}
        >
          {article.source} • {article.date}
        </small>

        <p
          style={{
            marginTop: "12px",
            color: "#555",
            lineHeight: "1.6",
          }}
        >
          {article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Read More →
        </a>
      </div>
    ))
  )}
</div>
    </>
  );
};

export default News;