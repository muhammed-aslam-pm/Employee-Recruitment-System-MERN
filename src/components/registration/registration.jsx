import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import axios from "axios";
import "../../css/Registration/registration.css";
import { resolvePath, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../../partials/Header";
import PageIllustration from "../../partials/PageIllustration";

function Registration() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [resume, setResume] = useState("");
  const [IsTabed, setIsTabed] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [hrName, setHrName] = useState("");
  
  
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    resume: "is my resume",
  });
  const [hrFormValues, setHrFormValues] = useState({
    companyName: "",
    hrName: "",
    email: "",
    password: "",
    resume: "is my resume",
  });
  
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const hrHandleChange = (e) => {
    setHrFormValues({ ...hrFormValues, [e.target.name]: e.target.value });
  };
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (IsTabed) {
      const response = await axios.post(`${URL}users/register`, formValues);
      if (response.data.status === true) {
        alert(response.data.message);
        navigate("/loginpage");
        window.location.reload();
      } else {
        alert(response.data?.message);
      }
      console.log(response.data);
    } else {
      const response = await axios.post(`${URL}hr/register`, hrFormValues);
      if (response.data.status === true) {
        alert(response.data?.message);
        navigate("/loginpage");
        window.location.reload();
      } else {
        alert(response.data?.message);
      }
      console.log(response.data);
    }
  };

  const navigate = useNavigate();

  const URL = "http://localhost:5000/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };
  const IsTabedfalse = () => {
    setIsTabed(false);
  };
  const IsTabedTrue = () => {
    setIsTabed(true);
  };

  return (
    <div className="main">
      {/*  Page illustration */}
      <div
        className="relative max-w-6xl mx-auto h-0 pointer-events-none"
        aria-hidden="true"
      >
        <PageIllustration />
      </div>

      <Header />
      <div className="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h1 className="mt-6 text-center text-4xl font-extrabold text-gray-300">
            Create an account
          </h1>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Tab.Group>
              <Tab.List className="flex p-1 rounded-md bg-gray-100 mb-8">
                <Tab
                  className={({ selected }) =>
                    `w-full py-2.5 px-5 text-sm font-medium rounded-md border-none outline-none ${
                      selected ? "bg-white shadow" : "bg-gray-100"
                    }`
                  }
                  onClick={IsTabedTrue}
                >
                  User
                </Tab>
                <Tab
                  className={({ selected }) =>
                    `w-full py-2.5 px-5 text-sm font-medium rounded-md border-none outline-none ${
                      selected ? "bg-white shadow" : "bg-gray-100"
                    }`
                  }
                  onClick={IsTabedfalse}
                >
                  Company
                </Tab>
              </Tab.List>
            </Tab.Group>
            <Tab.Group>
              {IsTabed ? (
                <Tab.Panels>
                  <Tab.Panel className="space-y-6">
                    {/* userRegister */}

                    <form onSubmit={handleSubmit}>
                      <div
                        className="mb-2"
                        //  onSubmit={handleSubmit}
                      >
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="first-name"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            value={formValues.firstName}
                            onChange={handleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            value={formValues.lastName}
                            onChange={handleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            autoComplete="current-password"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />

                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            {showPassword ? (
                              <span
                                className="material-symbols-outlined"
                                onClick={togglePasswordVisibility}
                              >
                                visibility_off
                              </span>
                            ) : (
                              <span
                                className="material-symbols-outlined"
                                onClick={togglePasswordVisibility}
                              >
                                visibility
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="resume"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Resume
                        </label>
                        <div className="mt-1">
                          <div className="relative rounded-md shadow-sm flex items-center justify-between bg-violet-500 p-1">
                            <span className="material-symbols-outlined text-white">
                              description
                            </span>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              className="hidden"
                              onChange={handleFileUpload}
                              value={resume}
                              accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                            />
                            <label
                              htmlFor="resume"
                              className="cursor-pointer relative w-3/4 px-3 py-2 rounded-md shadow-sm text-sm leading-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <span className="flex items-center">
                                {resume ? resume.name : "Upload Your resume"}
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <button
                          // type="submit"
                          onClick={() => handleSubmit()}
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Sign up
                        </button>
                      </div>

                      <div className="w-full h-fit p-2 flex items-center justify-center gap-2">
                        <span className="text-gray-600 font-sans">
                          Already Have An Account ?
                        </span>
                        <Link
                          to="/loginpage"
                          className="font-semibold text-blue-800 font-sans"
                        >
                          Login
                        </Link>
                      </div>
                    </form>

                    {/* company register */}
                  </Tab.Panel>
                </Tab.Panels>
              ) : (
                <Tab.Panels>
                  <Tab.Panel className="space-y-6">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-2">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Comapany Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="first-name"
                            name="companyName"
                            type="text"
                            autoComplete="given-name"
                            value={hrFormValues.companyName}
                            onChange={hrHandleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          HR Name
                        </label>
                        <div className="mt-1">
                          <input
                            id="last-name"
                            name="hrName"
                            type="text"
                            autoComplete="family-name"
                            value={hrFormValues.hrName}
                            onChange={hrHandleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            // autoComplete="email"
                            value={hrFormValues.email}
                            onChange={hrHandleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            // autoComplete="current-password"
                            value={hrFormValues.password}
                            onChange={hrHandleChange}
                            required
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                            {showPassword ? (
                              <span
                                className="material-symbols-outlined"
                                onClick={togglePasswordVisibility}
                              >
                                visibility
                              </span>
                            ) : (
                              <span
                                className="material-symbols-outlined"
                                onClick={togglePasswordVisibility}
                              >
                                visibility_off
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor="resume"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Verification
                        </label>
                        <div className="mt-1">
                          <div className="relative rounded-md shadow-sm flex items-center justify-between bg-violet-500 p-1">
                            <span className="material-symbols-outlined text-white">
                              description
                            </span>
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              className="hidden"
                              onChange={handleFileUpload}
                              accept=".pdf,.doc,.docx"
                            />
                            <label
                              htmlFor="resume"
                              className="cursor-pointer relative w-3/4 px-3 py-2 rounded-md shadow-sm text-sm leading-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              <span className="flex items-center">
                                {resume
                                  ? resume.name
                                  : "Upload Verfication Document"}
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2">
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          Sign up
                        </button>
                      </div>
                      <div className="w-full h-fit p-2 flex items-center justify-center gap-2">
                        <span className="text-gray-600 font-sans">
                          Already Have An Account ?
                        </span>
                        <Link
                          to="/loginpage"
                          className="font-semibold text-blue-800 font-sans"
                        >
                          Login
                        </Link>
                      </div>
                    </form>
                  </Tab.Panel>
                </Tab.Panels>
              )}
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
