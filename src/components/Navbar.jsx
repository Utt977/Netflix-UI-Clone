import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = UserAuth();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between w-full absolute p-2 z-10">
      <Link to="/">
        <h1 className="text-red-600 font-bold text-4xl">NETFLIX</h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="text-white bg-red-600 py-2 px-4 rounded "
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="login">
            <button className="text-white mr-2">Sign In</button>
          </Link>
          <Link to="signup">
            <button className="text-white bg-red-600 py-2 px-4 rounded ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
