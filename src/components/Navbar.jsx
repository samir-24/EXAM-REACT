import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg px-4 py-3">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand text-white fw-bold fs-4">
          📝 Blogify
        </Link>

        <div className="d-flex gap-2 align-items-center">

          <Link to="/" className="btn btn-light btn-sm">
            Home
          </Link>

          {user && (
            <Link to="/add" className="btn btn-warning btn-sm">
              + Add Post
            </Link>
          )}

          {user && (
            <span className="text-white fw-semibold">
              👋 {user}
            </span>
          )}

          {user ? (
            <button className="btn btn-danger btn-sm" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-success btn-sm">
              Login
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;