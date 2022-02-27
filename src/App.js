import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Places from "../src/Places/Places";
import Users from "../src/Users/Users";
import MainNavigation from "../src/Shared/Navigation/MainNavigation";
import Login from '../src/Auth/Login'
import Signup from '../src/Auth/Signup'

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
            <Route path="/auth" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
