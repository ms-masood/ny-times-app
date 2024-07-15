import "./NewsCards.css";

const NewsCard = (props) => {
  const mediaMetadata = props?.article?.media?.[0]?.["media-metadata"];
  const imageUrl = mediaMetadata
    ? mediaMetadata[2]?.url
    : "default-image-url.jpg";
  return (
    <div
      className="news-card-container"
      data-testid="news-card-container"
      onClick={props?.onClick}
    >
      <div className="news-card-details">
        <h4>{props?.article?.title}</h4>
        <p>{props?.article?.byline}</p>
      </div>
      <div className="news-card-image">
        <img src={imageUrl} alt="news-article-img" />
      </div>
    </div>
  );
};
export default NewsCard;
