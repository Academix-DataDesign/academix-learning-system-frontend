import { Fragment } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Show from "./Show";
import Vocabulary from "./domain/pages/Vocabulary/Vocabulary";

import Home from "./domain/pages/Home/Home";

import Auth from "./domain/pages/Auth/Auth";
import { SnackbarProvider } from "notistack";
import Courses from "./domain/pages/Courses/Courses";

function App() {
  return (
    <Fragment>
      <SnackbarProvider
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Show />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/home" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </Fragment>
  );
}

export default App;
