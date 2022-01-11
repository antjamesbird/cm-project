import Header from "./components/Header";
import Filters from "./components/Filters";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header
        title="Trending"
        subText="See what the GitHub community is most excited about today."
      />
      <div className="container">
        <Filters />
        <p>Other stuff</p>
      </div>
    </div>
  );
}

export default App;
