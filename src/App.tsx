import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Vocabulary from "./domain/pages/Vocabulary/Vocabulary";
import InstructorRegister from "./domain/pages/Register/InstructorRegister/InstructorRegister";
import Login from "./domain/pages/Login/Login";
import ForgotPassword from "./domain/pages/ForgetPassword/ForgetPassword";
import RegisterSelect from "./domain/pages/Register/RegisterSelect/RegisterSelect";
import Home from "./domain/pages/Home/Home";
import LearnerRegister from "./domain/pages/Register/LearnerRegister/LearnerRegister";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-learner" element={<LearnerRegister />} />
          <Route path="/login-select" element={<RegisterSelect />} />
          <Route path="/register-instructor" element={<InstructorRegister />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
