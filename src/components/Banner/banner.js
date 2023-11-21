import "../../css/user/UserHome.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

import bannimp2 from "../../assets/fsd5.gif";

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "../dropdown/index";
import Popup from "../Popup/popup1";
import Card from "../card/card";

function Banner() {
  const [isLoading, setIsLoading] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [isNotified, setIsNotified] = useState(true);
  const [userName, setUserName] = useState("");
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
    event.preventDefault();
    navigate("/jobapped");
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
    try {
      const response = await axios.post(`${URL}job`);
      console.log({ res: response.data });
      setJob(response.data?.doc);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const jobApplyHandler = async (data) => {
    console.log({ selected: data });
    try {
      const response = await axios.post(`${URL}job/apply`, {
        from: MyUserId,
        to: data.CreatedHr,
        jobId: data._id,
      });
      console.log({ res: response });
      alert("Applied");
    } catch (error) {
      console.error("Error applying to job:", error);
    }
  };

  const fetchJobRequest = async () => {
    try {
      const response = await axios.post(`${URL}job/get`, {
        from: MyUserId,
        approved: true,
      });
      console.log({ notification: response.data });
      setNotify(response.data?.doNotTrack);
    } catch (error) {
      console.error("Error fetching job requests:", error);
    }
  };

  return (
    <div>
      {/* latest job card */}
      <div className="container relative pl-[1rem] -mt-[1rem] gap-5">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 9000, // 5 seconds
            disableOnInteraction: false, // continue autoplay after user interaction
          }}
        >
          {job.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="banner-slide relative float-left h-[30rem] w-[65rem] p-[6rem] rounded-[1rem] bg-white grid-template-columns ">
                <div className="banner-content">
                  <h3 className="text-4xl font-bold text-black">{data.jobName}</h3>
                  <p className="1xl leading-8 pt-10 mr-[20rem] text-black text-left">
                    {data.desc}
                  </p>
                  <img
                    className="absolute top-0 w-[20rem] h-[25rem] rounded-lg object-cover mt-[3rem] ml-[38rem]"
                    src={bannimp2}
                    alt="Banner 2"
                  />
                  <div className="mt-10">
                    <div
                      className="h-auto flex gap-4 pr-[20rem] items-center justify-center"
                      style={{ width: "90%" }}
                    >
                      <button
                        onClick={() => {
                          jobApplyHandler(data);
                        }}
                        className="text-white linear rounded-full bg-blue-700 mt-10 px-8 py-2 text-center text-base font-semibold transition duration-200 hover:!bg-black/80 active:!bg-black/70 mb-20"
                      >
                        APPLY
                      </button>
                      <button
                        className="w-1/3 h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white mt-10 pl-4 pr-4 rounded hover:scale-105 mb-20"
                        onClick={jobappnavclick}
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
