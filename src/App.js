import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Education from "./Pages/Education/Education";
import JobPost from "./Pages/JobPost/JobPost";

import Company from "./Pages/Companies/Company";
import NavHeader from "./Components/NavHeader/NavHeader";

function App() {
  return (
    <div className="App">
      <Router>
        <NavHeader />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/jobpost" element={<JobPost />} />
          <Route path="/companies" element={<Company />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
