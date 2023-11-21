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


function Popup() {

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
      {/* Right-side bar */}

      {job.map((data) => (
        <div
          className="bg-white flex items-center justify-center rounded-lg animation-class h-[120rem] pb-[30rem] "
          style={{ 
            position: "absolute",
            top: "0",
            right: 0,
            width: "21%",
            backgroundColor: "white",
          }}
        >
          <div
            className="flex items-center justify-center flex-col gap-4 mb-[40rem] "
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "white",
            }}
          >
            <img src={fsd5} alt="pic" className="h-2/6" />
            <div
              className="flex flex-col gap-2"
              style={{ width: "80%", height: "auto" }}
            >
              <h1 className="text-1xl font-sans font-extrabold text-gray-900">
                {data.jobName}
              </h1>
              <h1 className="text-sm font-sans font-semibold text-gray-700">
                {data.desc}
              </h1>
            </div>
            <div
              className="flex  flex-col gap-2"
              style={{ width: "80%", height: "auto" }}
            >
              <h1 className="text-1xl font-sans font-extrabold text-gray-900">
                Qualification
              </h1>
              <ul className="list-disc ml-10 text-base font-sans font-semibold text-gray-700">
                <li>React : 1 year (Required)</li>
                <li>Bachelor's (Preffered)</li>
                <li>Node Js : 1 year (Preffered)</li>
                <li>Cloud Computing : 1 year (Preffered)</li>
                <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
              </ul>
            </div>
            <div className="w-4/5 h-16 flex items-center justify-center gap-2">
              <button
                className="h-10 bg-gray-900 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105"
                style={{ width: "50%" }}
                onClick={jobappnavclick}
              >
                LEARN MORE
              </button>
              <button
                className="h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105"
                style={{ width: "45%" }}
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Popup;
