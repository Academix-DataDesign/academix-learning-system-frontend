import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Vocabulary from "./domain/pages/Vocabulary/Vocabulary";
import Login from "./domain/pages/Login/Login";
import UserRegister from "./domain/pages/Register/Register";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
