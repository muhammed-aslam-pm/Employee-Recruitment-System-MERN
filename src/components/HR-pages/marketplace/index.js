import Banner from "../marketplace/components/Banner";
import Header from "../../navbar/Header";
import Navbar from "../../navbar/index";
import NFt2 from "../../../assets/img/nfts/Nft2.png";
import NFt4 from "../../../assets/img/nfts/Nft4.png";
import NFt3 from "../../../assets/img/nfts/Nft3.png";
import NFt5 from "../../../assets/img/nfts/Nft5.png";
import NFt6 from "../../../assets/img/nfts/Nft6.png";
import avatar1 from "../../../assets/img/avatars/avatar1.png";
import avatar2 from "../../../assets/img/avatars/avatar2.png";
import avatar3 from "../../../assets/img/avatars/avatar3.png";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



import NftCard from "../../card/NftCard";

const Marketplace = () => {
  const homenav = useRef(null);
  const meetingnav = useRef(null);
  const postnav = useRef(null);
  const navigate = useNavigate();
  const [hr, setHr] = useState({});
  const [job, setJob] = useState([]);
  const URL = "http://localhost:5000/";

  const HrId = localStorage.getItem("hr");

  const fetchUser = async () => {
    await axios
      .post(`${URL}hr`, {
        userId: HrId,
      })
      .then((res) => {
        console.log({ res: res });
        setHr(res.data);
      });
  };
  const fetchJob = async () => {
    await axios
      .post(`${URL}job`, {
        CreatedHr: HrId,
      })
      .then((res) => {
        console.log({ res: res });
        setJob(res.data?.doc);
        

      });
  };

  useEffect(() => {
    fetchUser();
    fetchJob();
  }, []);

  const profileclick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const homenavclick = (event) => {
    homenav.current.style.borderLeft = "4px solid #EF4444";
    homenav.current.style.backgroundColor = "white";
    event.preventDefault();
    navigate("/");
  };

  const jobpostclick = (event) => {
    event.preventDefault();
    navigate("/jobpost");
  };

  const testpostclick = (event) => {
    event.preventDefault();
    navigate("/postest");
  };

  const meetingnavclick = (event) => {
    meetingnav.current.style.borderLeft = "4px solid #EF4444";
    meetingnav.current.style.backgroundColor = "white";

    event.preventDefault();
    navigate("/meethome");
  };

  //signout
  const signoutclick = (event) => {
    localStorage.removeItem("hr");
    localStorage.removeItem("hr-auth-key");

    event.preventDefault();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="main">
      <div
        className="sidebar "
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "19%",
          height: "250vh",
          backgroundColor: "white",
        }}
      >
        <Header />
        <div className="flex pt-20 items-center justify-center flex-col gap-3 rounded-tl-lg rounded-bl-lg">
          <div className="flex items-center justify-start cursor-pointer">
            <h2 className="font-bold text-navy-700  text-2xl pt-20 mb-20 mr-12 ">
              👋 Hey
            </h2>
          </div>

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
              src="https://cdn.lordicon.com/osuxyevn.json"
              trigger="hover"
              style={{ width: "25px", height: "22px" }}
            ></lord-icon>
            <h1 className="font-bold  cursor-pointer">
              Home
            </h1>
          </div>

          <div
            className="w-4/5 h-20  flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105"
            onClick={jobpostclick}
          >
            <lord-icon
              className="cursor-pointer"
              src="https://cdn.lordicon.com/ynwbvguu.json"
              trigger="hover"
              style={{ width: "22px", height: "22px" }}
            ></lord-icon>
            <h1 className="font-bold text-navy-700  cursor-pointer">
              Post Job
            </h1>
          </div>

          <div
            className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
            onClick={testpostclick}
            ref={postnav}
          >
            <lord-icon
              className="cursor-pointer"
              src="https://cdn.lordicon.com/vufjamqa.json"
              trigger="hover"
              style={{ width: "22px", height: "22px" }}
            ></lord-icon>
            <h1 className="font-bold text-navy-700 cursor-pointer">
              Post Test
            </h1>
          </div>

          <div
            className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
            onClick={meetingnavclick}
            ref={meetingnav}
          >
            <lord-icon
              className="cursor-pointer"
              src="https://cdn.lordicon.com/ycwlopoz.json"
              trigger="hover"
              style={{ width: "22px", height: "22px" }}
            ></lord-icon>
            <h1 className="font-bold text-navy-700 cursor-pointer">
              Meetings
            </h1>
          </div>

          <div
            className="w-4/5 h-20 flex items-center justify-start gap-2 p-5 cursor-pointer rounded-full hover:scale-105 hover:bg-f4f7fe"
            onClick={signoutclick}
          >
            <lord-icon
              src="https://cdn.lordicon.com/hwuyodym.json"
              trigger="hover"
              style={{ width: "22px", height: "22px" }}
            ></lord-icon>
            <h1 className="font-bold text-navy-700  cursor-pointer">
              Settings
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-3 ml-60 mr-10 pl-40  grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2x9:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2 ">
          <div className="h-full">
            <Navbar />
          </div>

          {/* NFt Banner */}
          <Banner />

          {/* NFt Header */}
          <div className="mb-4 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center">
            <h4 className="ml-1 text-2xl font-bold text-navy-700">
              New Jobs
            </h4>
            <ul className="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12">
              <li>
                <a
                  className="text-base font-medium text-brand-500 hover:text-brand-500"
                  href=" "
                >
                  see all
                </a>
              </li>
            </ul>
          </div>

          {/* NFTs trending card */}
          <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3">
            {job.map((data) => (
              <NftCard
                bidders={[avatar1, avatar2, avatar3]}
                title={data.jobName}
                author={data.desc}
                price={data.salary}
                image={NFt2}
              />
            ))}
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Python Developer"
              author="Nouveau Labs Pvt. Ltd. is a SW Engineering Product and Services company with its HQ in Bangalore. The company has its executive leadership represented by industry veterans with deep background in software engineering and sales."
              price="₹3000"
              image={NFt3}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="MERN Stack Developer"
              author="We are seeking an experienced MERN Stack Developer to join our growing team. The ideal candidate should have 4-11 years of experience in ReactJS and Node.js development."
              price="₹13,45,904"
              image={NFt2}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Data Entry Clerk"
              author="We are looking for freelancers that can do simple data entry to spreadsheet and send email to the companies on a daily basis.
            "
              price="₹12,000"
              image={NFt4}
            />
          </div>

          {/* Recenlty Added setion */}
          <div className="mb-5 mt-5 flex items-center justify-between px-[26px]">
            <h4 className="text-2xl font-bold text-navy-700">
              Recently Added
            </h4>
          </div>

          {/* Recently Add NFTs */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Front End Developer"
              author="As a Software developer, we are looking for an adept employee who will provide application development and administration on the Service Now platform."
              price=" ₹2,40,000"
              image={NFt4}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Node.JS Backend Developer"
              author="We are looking for a highly capable Node.js developer to optimize our web-based application performance. "
              price="₹10,000"
              image={NFt5}
            />
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title="Web Developer"
              author="We are looking for a website Developer ( preferably Wordpress CMS) responsible for both back-end and front-end development,"
              price=" ₹22,000"
              image={NFt6}
            />
          </div>
        </div>

        {/* right side section */}
      </div>
    </div>
  );
};

export default Marketplace;
