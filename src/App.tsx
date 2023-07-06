import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Vocabulary from "./domain/pages/Vocabulary/Vocabulary";
import UserRegister from "./domain/pages/Register/UserRegister/UserRegister";
import InstructorRegister from "./domain/pages/Register/InstructorRegister/InstructorRegister";
import Login from "./domain/pages/Login/Login";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-user" element={<UserRegister />} />
          <Route path="/register-instructor" element={<InstructorRegister />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
