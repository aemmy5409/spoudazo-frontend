import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { userLogin } from "../state/auth/authActions";

export default function Login() {

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { loading, error, userInfo } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(userLogin({ username, password }));
	};

	useEffect(() => {
		if (userInfo) {
			// Optionally logout right after register
			navigate("/dashboard");
		  }
	  }, [dispatch, userInfo, navigate]);
    return (
      <>

        <Navbar/>
        {loading ? (
          <h1>Loading</h1>
          ) : error ? (
            <h1>error</h1>
          ) : (
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                    Sign in to your account
                  </h2>
                </div>
        
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form onSubmit={submitHandler} className="space-y-6">
                    <div>
                      <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                        Matric Number
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          name="username"
                          type="text"
                          required
                          placeholder="CSC/2000/123"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          autoComplete="text"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                      </div>
                    </div>
        
                    <div>
                      <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                          Password
                        </label>
                        <div className="text-sm">
                          <a href="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                          </a>
                        </div>
                      </div>

                      <div className="mt-2 relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          required
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="••••••••"
                          value={password}
                          autoComplete="current-password"
                          className="block w-full rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center px-3 text-sm text-gray-500 hover:text-gray-700"
                        >
                          {showPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </div>
        
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
        
                  <p className="mt-10 text-center text-sm/6 text-gray-500">
                    Not a member?{' '}
                    <a href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Create an account
                    </a>
                  </p>
                </div>
              </div>
          )
        }
        <Footer/>
      </>
    )
  }
  