import React from "react";
import "./NewsArticle.css";

const ArticleView = ({ article }) => {
  if (!article) {
    return (
      <div className="article-view">
        <p style={{ textAlign: "center" }}>Select any Article!</p>
      </div>
    );
  }

  const { title, url, byline, published_date, abstract, media } = article;

  const mainImage =
    media &&
    media[0] &&
    media[0]["media-metadata"] &&
    media[0]["media-metadata"][2]
      ? media[0]["media-metadata"][2].url
      : "";

  return (
    <div className="article-view">
      <h2>{title || "No Title"}</h2>
      {mainImage && <img src={mainImage} alt={title} />}
      <p>
        <strong>By:</strong> {byline || "Unknown"}
      </p>
      <p>
        <strong>Published:</strong> {published_date || "Unknown"}
      </p>
      <p>{abstract || "No abstract available."}</p>
      <a href={url || "#"} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleView;
