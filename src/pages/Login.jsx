import { useState } from "react";
import InputField from "../components/InputFields";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        role,
        email,
        password,
      });

      if (res.data.success) {
        if (role === "user") navigate("/user");
        else navigate("/driver");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg"
          >
            <option value="user">User</option>
            <option value="driver">Driver</option>
          </select>
        </div>

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button text="Login" onClick={handleLogin} />
      </div>
    </div>
  );
}

export default Login;
