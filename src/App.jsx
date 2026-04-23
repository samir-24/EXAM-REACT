import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 

const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navbar />

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/add"
            element={
              <PrivateRoute>
                <PostForm />
              </PrivateRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <PostForm />
              </PrivateRoute>
            }
          />

          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;