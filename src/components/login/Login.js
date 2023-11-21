import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../partials/Header";
import PageIllustration from "../../partials/PageIllustration";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [userToken, setUserToken] = useState(false);
  const [adminToken, setAdminToken] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const navigate = useNavigate();
  const URL = "http://localhost:5000/";

  // B (Login)
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      return;
    }

    try {
      if (isChecked) {
        await axios
          .post(`${URL}hr/login`, {
            email: loginEmail,
            password: loginPassword,
          })
          .then((res) => {
            if (res?.data?.token) {
              window.localStorage.setItem("hr-auth-key", res.data.token);
              window.localStorage.setItem("hr", res.data.doc);

              navigate("/");
              window.location.reload();
            }
            // setErrors(res?.data?.message);

            setErrors("Invalid credentials");
          });
      } else {
        await axios
          .post(`${URL}users/login`, {
            email: loginEmail,
            password: loginPassword,
          })
          .then((res) => {
            if (res?.data?.token) {
              window.localStorage.setItem("user-auth-key", res.data.token);
              window.localStorage.setItem("user", res.data.doc);

              navigate("/");
              window.location.reload();
            }
            setErrors("Invalid credentials");
            console.log("login not performed");
          });
      }
    } catch (error) {
      console.log({ error: error });
      setErrors("Invalid credentials");

      // setErrors(error?.message);
    }
  };
  //

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    // handle forgot password logic
  };

  const isFormValid = () => {
    // let errors = {};
    let isValid = true;

    if (!loginEmail) {
      errors = "Email is required";
      isValid = false;
    }

    if (!loginPassword) {
      errors = "Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (
    <div className="box">
      <header className="absolute w-full z-30">
        {/*  Page illustration */}
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <Header />
      </header>

      <div className="flex flex-col items-center justify-center h-screen bg-black ">
        {/* Page header */}
        <div className="max-w-3xl mx-auto text-center  pb-12 md:pb-20">
          <h1 className="h1 text-gray-300">
            Welcome back. We exist to make entrepreneurship easier.
          </h1>
        </div>
        <div className="bg-white p-10 rounded-lg shadow-md w-1/4">
          <form>
            <div className="mb-4">
              <label
                className="block text-black-300 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginEmail}
                onChange={handleEmailChange}
                className="border rounded-lg py-2 px-3 w-full"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label
                className="block text-black-300 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={loginPassword}
                  onChange={handlePasswordChange}
                  className="border rounded-lg py-2 px-3 w-full pr-10"
                />

                <button
                  type="button"
                  onClick={handleShowPasswordToggle}
                  className="absolute top-0 pb-12 right-4 h-full  text-gray-500 hover:text-gray-700 flex items-center justify-center"
                >
                  {showPassword ? (
                    <span className="material-symbols-outlined">
                      visibility_off
                    </span>
                  ) : (
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  )}
                </button>

                <div className="flex flex-wrap -mx-3 mb-4 mt-6">
                  <div className="w-full px-3">
                    <div className="flex justify-between">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        {/* <span className="text-gray-400 ml-2">
                          Keep me signed in
                        </span> */}
                        <span className="text-gray-400 ml-2">Login as Hr</span>
                      </label>

                      <Link
                        to="/reset-password"
                        className="text-blue-600 hover:text-black-200 transition duration-150 ease-in-out"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {errors && <p className="text-red-500">{errors}</p>}
            </div>

            <button
              type="submit"
              onClick={(e) => handleLogin(e)}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none w-full"
            >
              Log In
            </button>
          </form>
          <div className="text-gray-400 text-center mt-6">
            Don’t you have an account?{" "}
            <Link
              to="/reg"
              className="text-blue-600 hover:text-gray-200 transition duration-150 ease-in-out"
            >
              Sign up
            </Link>
          </div>
          <form>
            <div className="flex flex-wrap pb-5 pt-5 -mx-3">
              <div className="w-full rounded-lg px-3">
                <button className="btn px-0 text-white  bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                  <svg
                    className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                  </svg>
                  <span
                    className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                    aria-hidden="true"
                  ></span>
                  <span className="flex-auto pl-16 pr-8 -ml-16">
                    Sign in with Google
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
