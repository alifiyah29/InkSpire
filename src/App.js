import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* ALWAYS GONNA SHOW */}
        <Navbar />
        <div className="content">
          <Routes>
            {/* HOME PAGE */}
            <Route exact path="/" element={<Home />} />
            {/* CREATE */}
            <Route path="/create" element={<Create />} />
            {/* BLOG DETAILS */}
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
