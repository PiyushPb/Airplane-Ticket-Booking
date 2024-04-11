import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Home from "../page/Home";
import ErrorPage from "../page/ErrorPage";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import TicketSearchPage from "../page/TicketSearchPage";
import TicketBooking from "../page/TicketBooking";
import Ticket from "../page/Ticket";
import CheckoutPage from "../page/CheckoutPage";
import Admin from "../admin/Admin";
import AdminLogin from "../admin/AdminLogin";
import AddAirline from "../admin/AddAirline";
import AddFlight from "../admin/AddFlight";
import VerifyTicket from "../admin/VerifyTicket";
import VerifyTicketAdmin from "../components/VerifyTicketAdmin";
import Profile from "../page/Profile";

// ProtectedRoute component to handle admin-only routes
const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? <Element {...rest} /> : <Navigate to="/" replace />;
};

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<TicketSearchPage />} />
        <Route path="/book/:id" element={<TicketBooking />} />
        <Route path="/ticket/:ticketId" element={<Ticket />} />
        <Route path="/checkout-page" element={<CheckoutPage />} />
        <Route path="/profile" element={<Profile />} />
        {/* Protected admin routes */}
        <Route path="/admin" element={<ProtectedRoute element={Admin} />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin/add-airline" element={<AddAirline />} />
        <Route path="/admin/add-flight" element={<AddFlight />} />
        <Route path="/admin/verify-ticket" element={<VerifyTicket />} />
        <Route
          path="/verify-ticket/:ticketId"
          element={<VerifyTicketAdmin />}
        />

        {/* Fallback route for unknown paths */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
