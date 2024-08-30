import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Education from "./Pages/Education/Education";
import JobPost from "./Pages/JobPost/JobPost";
import Navbar from "./Components/Navbar";
import Events from "./Pages/Events/Events";
import Navbar1 from "./Components/Navbar/Navbar";
import Company from "./Pages/Companies/Company";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar1 />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/companies" element={<Company />} />

          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
