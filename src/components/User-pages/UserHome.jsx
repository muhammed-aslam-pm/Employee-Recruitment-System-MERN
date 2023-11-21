import "../../css/user/UserHome.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import fsd from "../../assets/fsd.jpg";
import fsd2 from "../../assets/fsd2.gif";
import fsd4 from "../../assets/fsd4.gif";
import fsd5 from "../../assets/fsd5.gif";

import fsdc from "../../assets/job1.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "../dropdown/index";
import Popup from "../Popup/popup1";
import Card from "../card/card";
import Banner from "../Banner/banner";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [IsNotified, setIsNotified] = useState(true);
  const [UserName, setUserName] = useState("");
  const [job, setJob] = useState([]);
  const [notify, setNotify] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();
  const homenav = useRef(null);
  const jobnav = useRef(null);
  const jobappnav = useRef(null);
  const quiznav = useRef(null);
  const meetingnav = useRef(null);
  const companynav = useRef(null);
  const settingsnav = useRef(null);
  const MyUserId = localStorage.getItem("user");
  const URL = "http://localhost:5000/";

  const notified = () => {
    setIsNotified(false);
  };
  const notifiedtrue = () => {
    setIsNotified(true);
  };
  const profileclick = (event) => {
    event.preventDefault();
    navigate("/profile");
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    navigate("/jobapp");
  };

  const [selectedAlert, setSelectedAlert] = useState(null);

  const homenavclick = (event) => {
    homenav.current.style.borderLeft = "4px solid #EF4444";
    homenav.current.style.backgroundColor = "#fff";
    jobnav.current.style.borderLeft = "none";
    jobnav.current.style.backgroundColor = "white";
    meetingnav.current.style.borderLeft = "none";
    meetingnav.current.style.backgroundColor = "white";
    companynav.current.style.borderLeft = "none";
    companynav.current.style.backgroundColor = "white";
    settingsnav.current.style.borderLeft = "none";
    settingsnav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/");
  };
  const jobnavclick = (event) => {
    jobnav.current.style.borderLeft = "4px solid #EF4444";
    jobnav.current.style.backgroundColor = "#fff";
    homenav.current.style.borderLeft = "none";
    homenav.current.style.backgroundColor = "white";
    meetingnav.current.style.borderLeft = "none";
    meetingnav.current.style.backgroundColor = "white";
    companynav.current.style.borderLeft = "none";
    companynav.current.style.backgroundColor = "white";
    settingsnav.current.style.borderLeft = "none";
    settingsnav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/jobs");
  };
  const jobappnavclick = (event) => {
    jobnav.current.style.borderLeft = "4px solid #EF4444";
    jobnav.current.style.backgroundColor = "#fff";
    homenav.current.style.borderLeft = "none";
    homenav.current.style.backgroundColor = "white";
    meetingnav.current.style.borderLeft = "none";
    meetingnav.current.style.backgroundColor = "white";
    companynav.current.style.borderLeft = "none";
    companynav.current.style.backgroundColor = "white";
    settingsnav.current.style.borderLeft = "none";
    settingsnav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/jobapped");
  };
  const meetingnavclick = (event) => {
    meetingnav.current.style.borderLeft = "4px solid #EF4444";
    meetingnav.current.style.backgroundColor = "#fff";
    jobnav.current.style.borderLeft = "none";
    jobnav.current.style.backgroundColor = "white";
    homenav.current.style.borderLeft = "none";
    homenav.current.style.backgroundColor = "white";
    companynav.current.style.borderLeft = "none";
    companynav.current.style.backgroundColor = "white";
    settingsnav.current.style.borderLeft = "none";
    settingsnav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/meethome");
  };
  const quiznavclick = (event) => {
    meetingnav.current.style.borderLeft = "4px solid #EF4444";
    meetingnav.current.style.backgroundColor = "#fff";
    jobnav.current.style.borderLeft = "none";
    jobnav.current.style.backgroundColor = "white";
    homenav.current.style.borderLeft = "none";
    homenav.current.style.backgroundColor = "white";
    companynav.current.style.borderLeft = "none";
    companynav.current.style.backgroundColor = "white";
    settingsnav.current.style.borderLeft = "none";
    settingsnav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/assesmentest");
  };
  const companynavclick = (event) => {
    companynav.current.style.borderLeft = "4px solid #EF4444";
    companynav.current.style.backgroundColor = "#fff";
    jobnav.current.style.borderLeft = "none";
    jobnav.current.style.backgroundColor = "white";
    meetingnav.current.style.borderLeft = "none";
    meetingnav.current.style.backgroundColor = "white";
    homenav.current.style.borderLeft = "none";
    homenav.current.style.backgroundColor = "white";
    settingsnav.current.style.borderLeft = "none";
    settingsnav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/companies");
  };
  const settingsnavclick = (event) => {
    settingsnav.current.style.borderLeft = "4px solid #EF4444";
    settingsnav.current.style.backgroundColor = "#fff";
    jobnav.current.style.borderLeft = "none";
    jobnav.current.style.backgroundColor = "white";
    meetingnav.current.style.borderLeft = "none";
    meetingnav.current.style.backgroundColor = "white";
    companynav.current.style.borderLeft = "none";
    companynav.current.style.backgroundColor = "white";
    homenav.current.style.borderLeft = "none";
    homenav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/settings");
  };

  useEffect(() => {
    fetchUser();

    fetchJob();
    fetchJobRequest();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.post(`${URL}users/`, {
        userId: MyUserId,
      });
      const { firstName, lastName } = response.data;
      setUserName(`${firstName} ${lastName}`);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  const fetchJob = async () => {
    await axios.post(`${URL}job`).then((res) => {
      console.log({ res: res });

      setJob(res.data?.doc);
    });
  };

  const jobApplyHandler = async (data) => {
    console.log({ selected: data });
    await axios
      .post(`${URL}job/apply`, {
        from: MyUserId,
        to: data.CreatedHr,
        jobId: data._id,
      })
      .then((res) => {
        console.log({ res: res });
        alert("Applyed");
      });
  };

  const fetchJobRequest = async () => {
    await axios
      .post(`${URL}job/get`, {
        from: MyUserId,
        approved: true,
      })
      .then((res) => {
        console.log({ notification: res });
        setNotify(res.data.doNotTrack);
      });
  };

  return (
    <div>
      {isLoading ? (
        <div
          className="w-full bg-white-100  flex"
          style={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/oezixobx.json"
              trigger="loop"
              delay="70"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </div>
        </div>
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ height: "100%", backgroundColor: "#f4f7fe" }}
        >
          {/* Sidebar */}
          <div
            className="flex items-center justify-center pb-[30rem] h-[120rem]   "
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "19%",
              backgroundColor: "white",
              overflowY: "auto",
            }}
          >
            <div className="flex items-center justify-center flex-col gap-3 rounded-tl-lg rounded-bl-lg pb-[35rem] ">
              <div className="flex items-center justify-start cursor-pointer">
                <h2 className="font-bold text-navy-700 text-2xl p-14 mr-12">
                  👋 Hey, {UserName ? UserName : "Loading..."}
                </h2>
              </div>

              {/*Home*/}
              <div
                className="w-4/5 h-20  flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105"
                style={{
                  backgroundColor: "#f4f7fe",
                }}
                onclick={homenavclick}
                ref={homenav}
              >
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/slduhdil.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
                <h1 className="font-bold text-navy-700  cursor-pointer">
                  Home
                </h1>
              </div>

              {/*job*/}
              <div
                className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
                onClick={jobnavclick}
                ref={jobnav}
              >
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/oezixobx.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
                <h1 className="font-bold text-navy-700  cursor-pointer">
                  Jobs
                </h1>
              </div>
              {/*jobApplyed*/}
              <div
                className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
                onClick={jobappnavclick}
                ref={jobappnav}
              >
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/frjgvxce.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
                <h1 className="font-bold text-navy-700  cursor-pointer">
                  Job Applyed
                </h1>
              </div>

              <div
                className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
                onClick={meetingnavclick}
                ref={meetingnav}
              >
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/hmkhncjw.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>

                <h1 className="font-bold text-navy-700  cursor-pointer">
                  Meetings
                </h1>
              </div>

              <div
                className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
                onClick={quiznavclick}
                ref={quiznav}
              >
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/zncllhmn.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
                <h1 className="font-bold text-navy-700  cursor-pointer">
                  Test
                </h1>
              </div>

              <div
                className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
                onClick={companynavclick}
                ref={companynav}
              >
                <lord-icon
                  className="cursor-pointer"
                  src="https://cdn.lordicon.com/lqsduwhb.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
                <h1 className="font-bold text-navy-700   cursor-pointer">
                  Companies
                </h1>
              </div>
              <div
                className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
                onClick={settingsnavclick}
                ref={settingsnav}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/dycatgju.json"
                  trigger="hover"
                  style={{ width: "22px", height: "22px" }}
                ></lord-icon>
                <h1 className="font-bold text-navy-700   cursor-pointer ">
                  Settings
                </h1>
              </div>
            </div>
          </div>

          {/* Middle portion */}
          <div
            className="flex items-center justify-center flex-col gap-4  "
            style={{
              width: "59%",
              backgroundColor: "#f4f7fe",
              minHeight: "100%",
            }}
          >
            <div className="relative mt-10  flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500  md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[700px] xl:gap-2">
              {/* Search-bar */}

              <div className="flex items-left rounded-full bg-lightPrimary text-navy-700  xl:w-[520px]">
                <p className="pl-3 pr-2 text-xl">
                  <lord-icon
                    className="cursor-pointer h-5 w-4 text-gray-400 "
                    src="https://cdn.lordicon.com/rlizirgt.json"
                    trigger="hover"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </p>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-full h-full mt-2 rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
                />
              </div>

              {/* start Notification */}
              <Dropdown
                button={
                  <p className="cursor-pointer">
                    <lord-icon
                      src="https://cdn.lordicon.com/msetysan.json"
                      trigger="hover"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </p>
                }
                animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
                children={
                  <div className="flex w-[360px] flex-col gap-5 rounded-[20px] bg-white p-8 shadow-xl shadow-shadow-500 ">
                    <div className="flex items-center justify-between">
                      <p className="text-base font-bold text-navy-700 ">
                        Notification
                      </p>
                      <p className="text-sm font-bold text-navy-700 ">
                        Mark all read
                      </p>
                    </div>
                    {notify &&
                      notify.map((data) => (
                        <button className="flex w-full items-center">
                          <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                            <p className="cursor-pointer">
                              <lord-icon
                                className="cursor-pointer"
                                onClick={profileclick}
                                src="https://cdn.lordicon.com/hbvyhtse.json"
                                trigger="hover"
                                style={{ width: "25px", height: "25px" }}
                              />
                            </p>
                          </div>
                          <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                            <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                              Congratz {data.from.companyName}
                              {""} is Approved
                            </p>
                            <p className="font-base text-left text-xs text-gray-900 ">
                              Your {data.jobId.jobName} apply has been Approved
                              Interview date will be sent soon
                            </p>
                          </div>
                        </button>
                      ))}

                    <button className="flex w-full items-center">
                      <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-2xl text-white">
                        <p className="cursor-pointer">
                          <lord-icon
                            className="cursor-pointer"
                            src="https://cdn.lordicon.com/hbvyhtse.json"
                            trigger="hover"
                            style={{ width: "25px", height: "25px" }}
                          />
                        </p>
                      </div>
                      <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                        <p className="mb-1 text-left text-base font-bold text-gray-900 ">
                          Jobee
                        </p>
                        <p className="font-base text-left text-xs text-gray-900 ">
                          Your Application for Designer has been Approved
                          Interview date will be 08-11-2020
                        </p>
                      </div>
                    </button>
                  </div>
                }
                classNames={
                  " px-[6rem] py-10  top-4 -left-[230px] md:-left-[440px] w-max"
                }
              />

              {/* Profile */}
              <p className="cursor-pointer">
                <lord-icon
                  className="cursor-pointer"
                  onClick={profileclick}
                  src="https://cdn.lordicon.com/hbvyhtse.json"
                  trigger="hover"
                  style={{ width: "25px", height: "25px" }}
                />
              </p>
            </div>

            <div className="mt-[5rem]" style={{ width: "100%" }}>
              <Banner />
            </div>

            <div className="mt-[30rem]  ">
              <Card />
            </div>
          </div>

          <div className="flex items-center justify-center pb-[30rem] z-50 ">
            <div>
              <Popup />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
