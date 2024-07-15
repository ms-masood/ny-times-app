export const getNyArticlesUrl = (duration) => {
  return `https://api.nytimes.com/svc/mostpopular/v2/viewed/${duration}.json?api-key=${process.env.REACT_APP_NY_NEWS_ARTICLES}`;
};
