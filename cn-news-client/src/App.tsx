import "./App.css";
import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";
/**
 * News App
 *
 * @version 1.0.0
 * @author Vignesh Selvan K R
 */
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
