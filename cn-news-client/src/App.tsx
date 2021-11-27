import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <ArticleList />
      </div>
    </div>
  );
};

export default App;
