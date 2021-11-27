import "./App.css";
import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app-content">
        <NewsContainer />
      </div>
    </div>
  );
};

export default App;
