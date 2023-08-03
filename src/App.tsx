import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Vocabulary from "./domain/pages/Vocabulary/Vocabulary";
import UserRegister from "./domain/pages/Register/LearnerRegister/UserRegister";
import InstructorRegister from "./domain/pages/Register/InstructorRegister/InstructorRegister";
import Login from "./domain/pages/Login/Login";
import Home from "./domain/pages/Home/Home";
import RegisterSelect from "./domain/pages/Register/RegisterSelect/RegisterSelect";
import ForgotPassword from "./domain/pages/ForgetPassword/ForgetPassword";
import NewRegister from "./domain/pages/Register/NewRegister/NewRegister";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <Fragment>
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-select" element={<RegisterSelect />} />
          <Route path="/register-user" element={<UserRegister />} />
          <Route path="/register-new" element={<NewRegister />} />
          <Route path="/register-instructor" element={<InstructorRegister />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
        </Routes>
      </Router>
      </SnackbarProvider>
    </Fragment>
  );
}

export default App;
