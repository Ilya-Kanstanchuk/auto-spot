import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import UserOnlyRoute from "./components/UserOnlyRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminOnlyRoute from "./components/AdminOnlyRoute";
import AdminPanel from "./pages/AdminPanel";
import CreateOffer from "./pages/CreateOffer";
import Offer from "./pages/Offer";
import MyOffers from "./pages/MyOffers";
import ModifyOffer from "./pages/ModifyOffer";
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
            path="/profile/myoffers"
            element={
              <UserOnlyRoute>
                <MyOffers />
              </UserOnlyRoute>
            }
          ></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/offer/:id" element={<Offer />}></Route>
          <Route
            path="/adminpanel"
            element={
              <AdminOnlyRoute>
                <AdminPanel />
              </AdminOnlyRoute>
            }
          ></Route>
          <Route
            path="/create"
            element={
              <UserOnlyRoute>
                <CreateOffer />
              </UserOnlyRoute>
            }
          ></Route>
          <Route
            path="/offer/modify/:id"
            element={
              <UserOnlyRoute>
                <ModifyOffer />
              </UserOnlyRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
