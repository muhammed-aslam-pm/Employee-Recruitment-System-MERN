import React from "react";
import Dropdown from "../dropdown/index";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import navbarimage from "../../assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "../../assets/img/avatars/avatar1.png";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {  

  const [darkmode, setDarkmode] = React.useState(false);
  const [notify, setNotify] = useState([]);
  const navigate = useNavigate();
  const URL = "http://localhost:5000/";
  const HrId = localStorage.getItem("hr");

  const profileclick = (event) => {
    event.preventDefault();
    navigate("/hrPro");
  };
  //signout
  const signoutclick = (event) => {
    localStorage.removeItem("hr");
    localStorage.removeItem("hr-auth-key");

    event.preventDefault();
    navigate("/");
    window.location.reload();
  };


  const fetchJobRequest = async () => {
    await axios
      .post(`${URL}job/get`, {
        to: HrId,
      })
      .then((res) => {
        console.log({ hrNOtifiy: res });
        setNotify(res.data.doNotTrack);
      });
  };

  // Approve
  const approveHandler = async (data) => {
    await axios
      .post(`${URL}job/approve`, {
        applicationId: data._id,
      })
      .then((res) => {
        console.log({ res: res });
        alert("Approved");
      });
  };

  useEffect(() => {
    fetchJobRequest();
  }, []);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl ">

      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800  md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900  xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 " />
          </p>
          <input
            type="text"
            placeholder="Search..."
            className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400  sm:w-fit"
          />
        </div>
  

        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer mt-2">
              <lord-icon
                src="https://cdn.lordicon.com/psnhyobz.json"
                trigger="hover"
                style={{ width: "20px", height: "20px" }}
              />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500  sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 ">
                  Notification
                </p>
                <p className="text-sm font-bold text-navy-700 ">
                  Mark all read
                </p>
              </div>
              {/* Company markketing area */}
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                  <svg
                    className="w-8 h-8 fill-current text-blue-600"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
                  </svg>
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                    New Update: jobee PRO is available
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 ">
                    Pro version is available Subscribe to Pro version!
                  </p>
                </div>
              </button>
              {/*  */}

              {/* Message */}
              {notify &&
                notify.map((data) => (
                  <button className="flex w-full  items-center  ">
                    <div className="flex h-full mb-20 pb-6 w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500  text-2xl text-white">
                      <lord-icon
                        src="https://cdn.lordicon.com/imamsnbq.json"
                        trigger="hover"
                        style={{ width: "40px", height: "40px" }}
                      />
                    </div>
                    <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                      <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                        {data.from.firstName} {data.from.lastName}{" "}
                       
                      </p>
                      <p className="font-base text-left text-xs text-gray-900 ">
                      Is apply for {data.jobId.jobName}
                      </p>
                      <button
                        class="text-white linear rounded-full bg-blue-700 px-2 py-2  text-center text-base font-semibold transition duration-200 hover:!bg-black/80 active:!bg-black/70 mt-5 mb-10"
                        style={{ width: "8rem" }}
                        onClick={() => approveHandler(data)}
                        data-te-toggle="modal"
                        data-te-target="#exampleModalCenter"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        approve
                      </button>
                    </div>
                  </button>
                ))}
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />


        {/* Profile & Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              src={avatar}
              alt="Elon Musk"
            />
          }
          children={
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 ">
              <div className="mt-3 ml-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 ">
                    👋 Hei, {}
                  </p>{" "}
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 " />

              <div className="mt-3 ml-4 flex flex-col">
                <a
                  href=" "
                  className="text-sm text-gray-800 "
                  onClick={profileclick}
                >
                  Profile Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm text-gray-800 "
                >
                  Job details
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                  onClick={signoutclick}
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
