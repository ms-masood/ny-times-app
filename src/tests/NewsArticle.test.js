import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
// import '@testing-library/jest-dom/extend-expect';

import ArticleView from "../components/NewsArticle.jsx";

describe("ArticleView Component", () => {
  it("renders without crashing", () => {
    const article = {
      title: "Test Article",
      url: "https://example.com/article",
      byline: "John Doe",
      published_date: "2024-07-15",
      abstract: "This is a test article abstract.",
      media: [
        {
          "media-metadata": [{ url: "https://example.com/image.jpg" }],
        },
      ],
    };

    render(<ArticleView article={article} />);
  });

  it("renders no article data available message when article prop is null", () => {
    const { getByText } = render(<ArticleView article={null} />);
    expect(getByText("Select any Article!")).toBeInTheDocument();
  });

  it("renders default values when some fields in article prop are missing", () => {
    const article = {
      title: null,
      url: null,
      byline: null,
      published_date: null,
      abstract: null,
      media: null,
    };

    const { getByText, queryByText } = render(
      <ArticleView article={article} />
    );

    expect(getByText("No Title")).toBeInTheDocument();
    expect(queryByText("By:")).toBeInTheDocument(); // Check for the presence of 'By:' label
    expect(queryByText("Published:")).toBeInTheDocument(); // Check for the presence of 'Published:' label
    expect(queryByText("No abstract available.")).toBeInTheDocument();
  });

  it("renders correctly when media array is empty", () => {
    const article = {
      title: "Test Article",
      url: "https://example.com/article",
      byline: "John Doe",
      published_date: "2024-07-15",
      abstract: "This is a test article abstract.",
      media: [],
    };

    const { getByText, queryByAltText } = render(
      <ArticleView article={article} />
    );

    expect(getByText("Test Article")).toBeInTheDocument();
    expect(queryByAltText("Test Article")).toBeNull(); // No image should be rendered
  });

  it("renders correctly when media array is present but empty", () => {
    const article = {
      title: "Test Article",
      url: "https://example.com/article",
      byline: "John Doe",
      published_date: "2024-07-15",
      abstract: "This is a test article abstract.",
      media: [
        {
          "media-metadata": [],
        },
      ],
    };

    const { getByText, queryByAltText } = render(
      <ArticleView article={article} />
    );

    expect(getByText("Test Article")).toBeInTheDocument();
    expect(queryByAltText("Test Article")).toBeNull(); // No image should be rendered
  });
});
