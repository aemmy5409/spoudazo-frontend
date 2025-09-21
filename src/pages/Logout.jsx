import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Logout() {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          ✅ You have been logged out successfully!
        </h1>
        <p className="text-gray-600 mb-6">Thanks for visiting. Come back soon!</p>

        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Login
        </Link>
      </div>

      <Footer />
    </>
  );
}
