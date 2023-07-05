import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jodza from "./Jodza";
import Login from "./pages/Login";
import UserRegister from "./pages/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Jodza />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegister />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
