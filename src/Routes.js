import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateResume from "./components/CreateResume";
import EditResume from "./components/EditResume";
import ViewResume from "./components/ViewResume";

const RouterPage = () => {
  return (
    <Router>
      <Link to="/" className="home-link"><h1>Resume Builder</h1></Link>
      <Routes>
        <Route exact path="/" element={<CreateResume />} />
        <Route path="/view" element={<ViewResume />} />
        <Route path="/edit" element={<EditResume />} />
      </Routes>
    </Router>
  );
};

export default RouterPage;
