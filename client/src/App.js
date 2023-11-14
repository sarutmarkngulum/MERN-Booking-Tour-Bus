import "antd/dist/antd.min.css";
import "./resourses/global.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";

import Profile from "./pages/Profile";
import ContactForm from "./pages/ContactForm";

import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";
import AdminHome from "./pages/Admin/AdminHome";
import AdminBuses from "./pages/Admin/AdminBuses";
import AdminUsers from "./pages/Admin/AdminUsers";
import AdminTour from "./pages/Admin/TourPage/AdminTour";
import CreateTour from "./pages/Admin/TourPage/CreateTour";
import House from "./pages/House";
import BookNow from "./pages/BookNow";
import ShowBus from "./pages/BusPages/ShowBus";
import BookingsTour from "./pages/BookingsTour";
import Bookings from "./pages/Bookings";
import AdminBookings from "./pages/Admin/AdminBookings";
import SingleTourCard from "./components/SingleTourCard";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      {loading && <Loader />}
      <BrowserRouter>
        <Routes>
          <Route
            path="/bus"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tour"
            element={
              <ProtectedRoute>
                <Tour />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tour/:id"
            element={
              <ProtectedRoute>
                <SingleTourCard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/book-now/:id"
            element={
              <ProtectedRoute>
                <BookNow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/show-bus/:id"
            element={
              <ProtectedRoute>
                <ShowBus />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookings"
            element={
              <ProtectedRoute>
                <Bookings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookingsTour"
            element={
              <ProtectedRoute>
                <BookingsTour />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <House />
              </ProtectedRoute>
            }
          />

          <Route
            path="/client/src/pages/Profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client/src/pages/ContactForm"
            element={
              <ProtectedRoute>
                <ContactForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/AdminHome"
            element={
              <ProtectedRoute>
                <AdminHome />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/buses"
            element={
              <ProtectedRoute>
                <AdminBuses />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/tour"
            element={
              <ProtectedRoute>
                <AdminTour />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/tour/create"
            element={
              <ProtectedRoute>
                <CreateTour />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/bookings"
            element={
              <ProtectedRoute>
                <AdminBookings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="/ResetPassword"
            element={
              <PublicRoute>
                <ResetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
