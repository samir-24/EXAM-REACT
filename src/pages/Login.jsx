import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!form.username || !form.password) {
      alert("Enter username and password");
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:5000/users?username=${form.username}&password=${form.password}`
      );

      if (res.data.length > 0) {
        localStorage.setItem("user", form.username);
        navigate("/");
      } else {
        alert("Invalid credentials ");
      }
    } catch (err) {
      alert("Server error");
      console.log(err);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh", background: "#f5f7fa" }}
    >
      <div className="card p-4 shadow" style={{ width: "350px", borderRadius: "12px" }}>
        
        <h3 className="text-center mb-3">🔐 Login</h3>

        <input
          type="text"
          name="username"
          className="form-control mb-2"
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          className="form-control mb-3"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;