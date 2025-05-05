import { useState } from "react";
import login_bg from "../../assets/login_bg.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (formData.password.length < 2)
      newErrors.password = "Enter a valid password";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(apiUrl + "/api/auth/login", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (!response.ok) {
        console.log(result);
        throw new Error(result.message || "Failed to Login");
      }
      toast.success("Login successfully.");
      localStorage.setItem("access_token", response.headers.get('access_token'))
      localStorage.setItem("refresh_token", response.headers.get('refresh_token'))
      navigate("/admin");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
    setErrors({});
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${login_bg})`,
      }}
      className="bg-cover bg-center h-screen bg-opacity-0 flex items-center justify-center"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="bg-white py-[56px] px-[40px] w-[537px] rounded-lg">
        <p className="text-2xl font-semibold font-raleway tracking-tight">
          <span>Inclusive</span>
          <span className="text-[#96FC04]">Insights</span>
        </p>
        <p className="text-4xl py-5">Welcome </p>
        <div className="">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg">
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email Id
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-200"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-4 relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 pr-10 bg-gray-200"
                />
                {/* Eye Icon */}
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-4 cursor-pointer text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black font-semibold text-white py-2 rounded-md hover:bg-gray-800 transition"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
