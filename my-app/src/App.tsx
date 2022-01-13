import Header from "./components/Header";
import Controls from "./components/Controls";
import { Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Repositories from "./components/Repositories";
import Developers from "./components/Developers";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header
          title="Trending"
          subText="See what the GitHub community is most excited about today."
        />
        <div className="container">
          <Controls />
          <Routes>
            <Route path="/" element={<Repositories />} />
            <Route path="developers" element={<Developers />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
