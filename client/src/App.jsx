import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import UserOnlyRoute from "./components/UserOnlyRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/profile"
            element={
              <UserOnlyRoute>
                <Profile />
              </UserOnlyRoute>
            }
          ></Route>
          <Route
            path="/catalog"
            element={
              <UserOnlyRoute>
                <Catalog />
              </UserOnlyRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
