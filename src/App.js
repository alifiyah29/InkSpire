import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* ALWAYS GONNA SHOW */}
        <Navbar />
        <div className="content">
          <Routes>
            {/* HOME PAGE */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
