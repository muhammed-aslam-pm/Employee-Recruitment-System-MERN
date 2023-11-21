import "../../css/user/UserHome.css";
import fsd from "../../assets/fsd.jpg";
import fsd2 from "../../assets/fsd2.gif";
import fsd4 from "../../assets/fsd4.gif";
import fsd5 from "../../assets/fsd5.gif";

import fsdc from "../../assets/job1.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Dropdown from "../dropdown/index";

function Card() {
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

  const jobnavclick = (event) => {
    event.preventDefault();
    navigate("/jobs");
  };

  const checkclick = () => {
    setIsChecked(false);
  };
  const checkclickfalse = () => {
    setIsChecked(true);
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
    /* New Jobs */

    <div
      className=" flex flex-col items-left justify-center gap-1 "
      style={{
        width: "100%",
        minHeight: "100%",
        backgroundColor: "#f4f7fe",
      }}
    >
      {/* Jobavailable bar */}
      <div
        className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center cursor-pointer"
        style={{ width: "95%" }}
      >
        <h4 className="ml-1 text-2xl font-bold text-navy-700 ">
          Jobs Available
        </h4>
        <h1 className="w-3/4">&nbsp;</h1>
        <h1
          className="ml-1 text-1xl font-semibold text-navy-700 "
          onClick={jobnavclick}
        >
          See All
        </h1>
      </div>

      <div
        className="rounded-3xl flex items-left justify-left flex-row flex-wrap gap-10"
        style={{ width: "100%", minHeight: "100%" }}
      >
        {/* New jobs */}
        {job.map((data) => (
          <div
            key={data.id}
            className="bg-white rounded-[15px] p-5 "
            style={{ width: "30%", height: "100%" }}
          >
            {data.categories.includes("Software") ? (
              <img src={fsd} alt="pic" className="h-2/5 w-90 rounded-tl-lg " />
            ) : (
              <img
                src={fsd4}
                alt="pic"
                className="h-2/5  w-90 rounded-tl-lg "
              />
            )}

            <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
              <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900 uppercase">
                {data.jobName}
              </h1>
              <h1 className="text-xs font-kern font-semibold ml-5 pr-5 text-gray-700 ">
                {data.desc}
              </h1>
            </div>

            <div className="w-full h-1/5 pt-10 pb-5 rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
              {isChecked ? (
                <lord-icon
                  onClick={checkclick}
                  src="https://cdn.lordicon.com/gigfpovs.json"
                  trigger="hover"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              ) : (
                <lord-icon
                  onClick={checkclickfalse}
                  src="https://cdn.lordicon.com/eanmttmw.json"
                  trigger="hover"
                  style={{ width: "25px", height: "25px" }}
                ></lord-icon>
              )}
              <lord-icon
                src="https://cdn.lordicon.com/uvqnvwbl.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              ></lord-icon>

              <button
                onClick={() => {
                  jobApplyHandler(data);
                }}
                className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                style={{ width: "45%" }}
              >
                APPLY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
