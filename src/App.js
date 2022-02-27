import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Places from "../src/Places/Places";
import Users from "../src/Users/Users";
import MainNavigation from "../src/Shared/Navigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <h2 style={{ color: "teal", marginTop: "5rem" }}>Re-Usable Components</h2>

      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/places" element={<Places />} />
          </Routes>
          <Routes>
            <Route path="/users" element={<Users />} />
          </Routes>
          <Routes>
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
