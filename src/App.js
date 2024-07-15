import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewsArticlesListPage from "./pages/NewsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NewsArticlesListPage />} />
      </Routes>
    </div>
  );
}

export default App;
