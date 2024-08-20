import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Hom/Home";
import Education from "./Pages/Education/Education";
import JobPost from "./Pages/JobPost/JobPost";
import Activity from "./Pages/Activity/Activity";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
