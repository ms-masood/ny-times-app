import { useState, useEffect } from "react";
import axios from "axios";
import DropdownSelect from "../components/SelectDuration";
import NewsCard from "../components/cards/NewsCard";
import ArticleView from "../components/NewsArticle";
import { getNyArticlesUrl } from "../utils/API";
import "./NewsList.css";

const NewsArticlesListPage = (props) => {
  const [duration, setDuration] = useState(1);
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);

  const fetchArticles = async (url) => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticles(getNyArticlesUrl(duration));
  }, [duration]);

  return (
    <div className="">
      <header>
        <DropdownSelect selectedValue={duration} onSelectChange={setDuration} />
      </header>
      <br />
      <div className="news-articles-list-container">
        <div className="news-articles-list">
          {articles.map((article, index) => {
            return (
              <NewsCard
                key={index}
                article={article}
                onClick={() => {
                  setArticle(article);
                }}
              />
            );
          })}
        </div>
        <div className="news-article-view">
          <ArticleView article={article} />
        </div>
      </div>
    </div>
  );
};

export default NewsArticlesListPage;
