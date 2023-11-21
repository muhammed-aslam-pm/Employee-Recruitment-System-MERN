import "../../css/user/UserProfile.css";
import { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Profile() {
  const [firstName, setFirstName] = useState("");

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(true);
  const fname = useRef(null);
  const lname = useRef(null);
  const email = useRef(null);
  const bio = useRef(null);
  const ccode = useRef(null);
  const phone = useRef(null);
  const github = useRef(null);
  const website = useRef(null);
  const address = useRef(null);
  const education = useRef(null);
  const interests = useRef(null);
  const sskill = useRef(null);
  const tskill = useRef(null);
  const workexp = useRef(null);
  const workexpdesc = useRef(null);
  const project = useRef(null);
  const projectdesc = useRef(null);
  const navigate = useNavigate();
  const MyUserId = localStorage.getItem("user");
  const URL = "http://localhost:5000/";

  const fetchUser = async () => {
    await axios
      .post(`${URL}users/`, {
        userId: MyUserId,
      })
      .then((res) => {
        console.log({ res: res });
        setUser(res.data);
      });
  };

  useEffect(() => {
    fetchUser();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // function handleFirstNameChange(res) {
  //   // Modify firstName when user inputs a new value
  //   setFirstName(res.data);
  // }

  //   function handleUpdateClick() {
  //   // Update firstName in database when user clicks update button
  //   axios.put('user/register', { firstName })
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  const [image, setImage] = useState("https://via.placeholder.com/150");
  const [fileInputKey, setFileInputKey] = useState(0);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  //clicks
  const homeclick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const jobclick = (event) => {
    event.preventDefault();
    navigate("/jobs");
  };
  const comapniesclick = (event) => {
    event.preventDefault();
    navigate("/companies");
  };

  //signout
  const signoutclick = (event) => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-auth-key");

    event.preventDefault();
    navigate("/");
    window.location.reload();
  };

  const editmode = () => {
    setIsEdit(false);
  };
  const savemode = (event) => {
    event.preventDefault();
    const fnameval = fname.current.value;
    const lnameval = lname.current.value;
    const emailval = email.current.value;
    const bioval = bio.current.value;
    const ccodeval = ccode.current.value;
    const phoneval = phone.current.value;
    const githubval = github.current.value;
    const websiteval = website.current.value;
    const addressval = address.current.value;
    const educationval = education.current.value;
    const interestsval = interests.current.value;
    const sskillval = sskill.current.value;
    const tskillval = tskill.current.value;
    const wkexpval = workexp.current.value;
    const wkexpdescval = workexpdesc.current.value;
    const projectval = project.current.value;
    const projectdescval = projectdesc.current.value;
    console.log({
      fnameval,
      lnameval,
      emailval,
      bioval,
      ccodeval,
      phoneval,
      githubval,
      websiteval,
      addressval,
      educationval,
      interestsval,
      sskillval,
      tskillval,
      wkexpval,
      wkexpdescval,
      projectval,
      projectdescval,
    });
    setIsEdit(true);
  };
  const cancelmode = () => {
    setIsEdit(true);
  };

  return (
    <div>
      {isLoading ? (
        <div
          className="w-full bg-white-100 flex"
          style={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <lord-icon
              src="https://cdn.lordicon.com/hbvyhtse.json"
              trigger="loop"
              delay="70"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </div>
        </div>
      ) : (
        <>
          {isEdit ? (
            <div className="flex flex-col h-screen">
              <nav className="flex items-center justify-between bg-white border-b border-gray-200 pb-5 pt-5 px-8 py-2">
                <div className="text-2xl font-bold">Jobee</div>
                <ul className="flex items-center cursor-pointer">
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={homeclick}
                  >
                    Home
                  </li>
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={jobclick}
                  >
                    Jobs
                  </li>
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={comapniesclick}
                  >
                    Companies
                  </li>
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={signoutclick}
                  >
                    Sign out
                  </li>
                </ul>
              </nav>
              <div className="flex flex-col items-center my-8 s">
                <div
                  className="bg-gray-100 shadow-md flex items-center justify-center w-fit h-fit p-2 px-4 rounded-full absolute gap-2 cursor-pointer"
                  style={{ left: "85%" }}
                >
                  <img
                    src="https://img.icons8.com/material-rounded/480/null/writer-male.png"
                    alt="Edit"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <h1 className="font-semibold text-base" onClick={editmode}>
                    Edit Your Profile
                  </h1>
                </div>
                <div className="relative inline-block">
                  <img
                    className="rounded-full w-32 h-32 object-cover"
                    src={image}
                    alt="Profile"
                  />
                  <label
                    htmlFor="fileInput"
                    className="absolute top-20 -right-3 bg-white p-2 rounded-full shadow-lg cursor-pointer"
                  >
                    <div className="flex flex-col justify-end">
                      <span class="material-symbols-outlined">edit</span>
                    </div>
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    key={fileInputKey}
                    className="sr-only"
                    onChange={(e) => {
                      setFileInputKey((prev) => prev + 1);
                      handleFileChange(e);
                    }}
                  />
                </div>
                <div className="flex flex-col items-center mt-4">
                  <div className="text-2xl font-bold">{`${user.firstName} ${user.lastName}`}</div>
                  <div className="text-lg text-gray-500">
                    Front-end Developer
                  </div>
                  <div className="text-lg text-gray-500">{user.email}</div>
                  <div className="text-lg text-gray-500">
                    Passionate about creating beautiful and functional web
                    applications
                  </div>
                </div>
                <div className="w-3/4 p-4 bg-white rounded-lg shadow-md">
                  <Tabs>
                    <TabList className="flex border-b-1 mb-4 cursor-pointer">
                      <Tab className="mr-4 border-gray-200 border-b-2 py-2 px-4 text-gray-500 hover:text-red-500  focus:text-red-500 focus:border-gray-500">
                        Overview
                      </Tab>
                      <Tab className="mr-4 border-gray-200 border-b-2 py-2 px-4 text-gray-500 hover:text-red-500  focus:text-red-500 focus:border-gray-500">
                        Skills
                      </Tab>
                      <Tab className="mr-4 border-gray-200 border-b-2 py-2 px-4 text-gray-500 hover:text-red-500  focus:text-red-500 focus:border-gray-500">
                        Work Experience & Projects
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className="h-64 bg-gray-100 p-2 flex items-center justify-center gap-2 rounded-lg">
                        <div
                          className="h-full flex items-center justify-center flex-col gap-6 p-4"
                          style={{ width: "31.666%" }}
                        >
                          <div className="w-full h-auto  flex items-center justify-start gap-2">
                            <img
                              src="https://img.icons8.com/ios-glyphs/480/null/phone--v1.png"
                              alt="Phone Icon"
                              style={{ width: "25px", height: "25px" }}
                            />
                            <h1 className="text-base font-sans font-semibold">
                              +91 9983451232
                            </h1>
                          </div>
                          <div className="w-full h-auto flex items-center justify-start gap-2">
                            <img
                              src="https://img.icons8.com/ios-glyphs/480/null/github.png"
                              alt="Git Icon"
                              style={{ width: "25px", height: "25px" }}
                            />
                            <a
                              href="https://github.com/johndoe"
                              className="text-base font-sans font-semibold hover:text-red-500"
                            >
                              https://github.com/johndoe
                            </a>
                          </div>
                          <div className="w-full h-auto flex items-center justify-start gap-2">
                            <img
                              src="https://img.icons8.com/ios-glyphs/480/null/domain.png"
                              alt="Website Icon"
                              style={{ width: "25px", height: "25px" }}
                            />
                            <a
                              href="https://Johndoe-portfolio.com/"
                              className="text-base font-sans font-semibold hover:text-red-500"
                            >
                              https://johndoe-portfolio.com
                            </a>
                          </div>
                          <div className="w-full h-auto flex items-center justify-start gap-2">
                            <img
                              src="https://img.icons8.com/material-sharp/480/null/marker.png"
                              alt="Location Icon"
                              style={{ width: "25px", height: "25px" }}
                            />
                            <div className="text-base font-sans font-semibold">
                              John Villa,Bengaluru,karnataka,India
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-gray-700"
                          style={{ width: "1.3px", height: "75%" }}
                        ></div>
                        <div
                          className="h-full flex items-center justify-start flex-col gap-4 p-4"
                          style={{ width: "31.666%" }}
                        >
                          <div className="w-full h-auto flex items-center justify-start gap-2 pt-4">
                            <img
                              src="https://img.icons8.com/material-rounded/480/null/graduation-cap--v1.png"
                              alt="Education Icon"
                              style={{ width: "25px", height: "25px" }}
                            />
                            <h1 className="text-lg font-sans font-bold">
                              Education
                            </h1>
                          </div>
                          <div className="w-full h-auto flex items-center justify-center p-3">
                            <ul className="list-disc font-sans font-semibold">
                              <li>
                                Diploma in Computer Engineering IPT & GPTC
                                Shoranur,Palakkad
                              </li>
                              <li>
                                Plus Two Higher Secondary School, Kerala, India
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="bg-gray-700"
                          style={{ width: "1.3px", height: "75%" }}
                        ></div>
                        <div
                          className="h-full flex items-start justify-center flex-col gap-4 p-4"
                          style={{ width: "31.666%" }}
                        >
                          <div className="w-full h-auto flex items-center justify-start gap-2 -mt-14">
                            <img
                              src="https://img.icons8.com/ios-glyphs/480/null/add-to-favorites.png"
                              alt="Interest Icon"
                              style={{ width: "25px", height: "25px" }}
                            />
                            <h1 className="text-lg font-sans font-bold">
                              Interests
                            </h1>
                          </div>
                          <div className="w-full h-auto flex items-start justify-start p-2 pl-4">
                            <ul className="list-disc font-sans font-semibold">
                              <li>Web Development</li>
                              <li>Software Development</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="h-64 bg-gray-100 p-4 flex items-center justify-center gap-1 rounded-lg">
                        <div className="w-1/2 h-full flex items-center justify-center gap-1 flex-col p-4">
                          <div className="w-full h-auto flex items-center justify-center">
                            <h1 className="text-base font-bold underline underline-offset-4 text-gray-800 pb-2">
                              Soft Skills
                            </h1>
                          </div>
                          <div className="softskill w-full h-3/4 grid grid-flow-row-dense grid-cols-2 items-center p-4 gap-2 overflow-scroll overflow-x-hidden">
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Good Communication
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Creativity
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Critical Thinking
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Leadership
                            </h1>
                          </div>
                        </div>
                        <div
                          className="bg-gray-700"
                          style={{ width: "1.3px", height: "75%" }}
                        ></div>
                        <div className="w-1/2 h-full flex items-center justify-center gap-4 flex-col p-4">
                          <div className="w-full h-auto flex items-center justify-center">
                            <h1 className="text-base font-bold underline underline-offset-4 text-gray-800 pb-2">
                              Technical Skills
                            </h1>
                          </div>
                          <div className="softskill w-full h-3/4 grid grid-flow-row-dense grid-cols-2 items-center p-4 gap-2 overflow-scroll overflow-x-hidden">
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              C & C++ Programming
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Java Programming
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Python Programming
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              HTML, CSS & Javascript
                            </h1>
                            <h1 className="w-fit h-fit font-sans font-bold px-4 bg-yellow-400 text-gray-900 p-2 flex items-center justify-center rounded-full">
                              Android
                            </h1>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="h-64 bg-gray-100 p-4 flex items-center justify-center gap-1 rounded-lg">
                        <div className="w-1/2 h-full flex items-center justify-center gap-1 flex-col p-4">
                          <div className="w-full h-auto flex items-center justify-center">
                            <h1 className="text-base font-bold underline underline-offset-4 text-gray-800 ">
                              Work Experience
                            </h1>
                          </div>
                          <div className="softskill w-full h-3/4 items-start p-4 gap-2 overflow-scroll overflow-x-hidden">
                            <ol className="list-decimal font-bold w-full p-3 text-slate-800 -mt-3">
                              <li>Software Engineer at Google</li>
                              <ul className="list-disc pl-4">
                                <li>
                                  Developed and maintained code for Google's
                                  flagship search engine product, using Java,
                                  C++, and Python.
                                </li>
                                <li>
                                  Collaborated with cross-functional teams to
                                  gather requirements and create project plans,
                                  resulting in the successful launch of several
                                  new product features.
                                </li>
                              </ul>
                              <li>Front-end Developer at Apple</li>
                              <ul className="list-disc pl-4">
                                <li>
                                  Developed and maintained the user interface
                                  for Apple's iOS mobile applications, using
                                  HTML, CSS, and JavaScript.
                                </li>
                                <li>
                                  Collaborated with design teams to implement
                                  new designs and ensure consistency across all
                                  Apple products.
                                </li>
                              </ul>
                            </ol>
                          </div>
                        </div>
                        <div
                          className="bg-gray-700"
                          style={{ width: "1.3px", height: "75%" }}
                        ></div>
                        <div className="w-1/2 h-full flex items-center justify-center gap-4 flex-col p-4">
                          <div className="w-full h-auto flex items-center justify-center">
                            <h1 className="text-base font-bold underline underline-offset-4 text-gray-800 ">
                              Projects
                            </h1>
                          </div>
                          <div className="softskill w-full h-3/4 items-start p-4 gap-2 overflow-scroll overflow-x-hidden">
                            <ol className="list-decimal font-bold w-full p-3 text-slate-800 -mt-3">
                              <li>Bank Management System</li>
                              <ul className="list-disc pl-4">
                                <li>
                                  It Is a Desktop Application For Bank
                                  Transactions Through Online
                                </li>
                              </ul>
                              <li>Student Registration</li>
                              <ul className="list-disc pl-4">
                                <li>
                                  It Is a Desktop Application For Student
                                  Admissions Through Online
                                </li>
                              </ul>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-screen">
              <nav className="flex items-center justify-between bg-white border-b border-gray-200 pb-5 pt-5 px-8 py-2">
                <div className="text-2xl font-bold">Jobee</div>
                <ul className="flex items-center cursor-pointer">
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={homeclick}
                  >
                    Home
                  </li>
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={jobclick}
                  >
                    Jobs
                  </li>
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={comapniesclick}
                  >
                    Companies
                  </li>
                  <li
                    className="text-base font-sans font-semibold ml-4"
                    onClick={signoutclick}
                  >
                    Sign out
                  </li>
                </ul>
              </nav>
              <form>
                <div className="w-full h-full flex items-center justify-start flex-col">
                  <div className="w-full h-fit p-2 flex items-center justify-between px-6">
                    <h1 className="text-xl font-sans font-bold">
                      Edit Your Profile
                    </h1>
                    <div className="w-fit flex items-center justify-center gap-2">
                      <input
                        type="submit"
                        value={"save"}
                        className="w-fit h-fit bg-blue-600 p-2 px-4 rounded-lg text-base font-sans font-bold text-white cursor-pointer"
                        onSubmit={savemode}
                      />
                      <button
                        className="w-fit h-fit bg-blue-600 p-2 px-4 rounded-lg text-base font-sans font-bold text-white"
                        onClick={cancelmode}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                  <br></br>
                  <div className="w-full h-full px-4 flex items-center justify-center">
                    <div className="w-1/2 h-full flex items-center justify-center flex-col">
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-12">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                          placeholder="First Name"
                          ref={fname}
                          value={user.firstName}
                          required
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-12">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="bg-gray-300 p-2  rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                          placeholder="Last Name"
                          ref={lname}
                          value={user.lastName}
                          required
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-16">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Email Id
                        </label>
                        <input
                          type="email"
                          className="bg-gray-300 p-2 ml-1 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                          placeholder="Email Id"
                          ref={email}
                          value={user.email}
                          required
                        />
                      </div>
                      <div className="w-3/4 h-1/5 flex items-start justify-start p-2 gap-24">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Bio
                        </label>
                        <textarea
                          className="softskill resize-none ml-2 bg-gray-300 p-2 outline-none caret-red-600 rounded-md text-base font-sans font-bold text-gray-900 w-3/5 h-full"
                          placeholder="Bio"
                          ref={bio}
                          required
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-2">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <input
                          type="text"
                          className="bg-gray-300 p-2 ml-3 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900"
                          value={"+91"}
                          style={{ width: "10%" }}
                          ref={ccode}
                        />
                        <input
                          type="text"
                          className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 "
                          placeholder="Phone Number"
                          style={{ width: "48%" }}
                          ref={phone}
                          required
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-16">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Github
                        </label>
                        <input
                          type="text"
                          className="bg-gray-300 p-2 ml-3 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5 "
                          placeholder="Github Link"
                          ref={github}
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-14">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Website
                        </label>
                        <input
                          type="text"
                          className="bg-gray-300 p-2 ml-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5 "
                          placeholder="Website Link"
                          ref={website}
                        />
                      </div>
                      <div className="w-3/4 h-1/5 flex items-start justify-start p-2 gap-16">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Address
                        </label>
                        <textarea
                          className="softskill resize-none bg-gray-300 p-2 outline-none caret-red-600 rounded-md text-base font-sans font-bold text-gray-900 w-3/5 h-full"
                          placeholder="Address"
                          ref={address}
                          required
                        />
                      </div>
                    </div>
                    <div
                      className="bg-gray-700"
                      style={{ width: "1.3px", height: "75%" }}
                    ></div>
                    <div className="w-1/2 h-full flex items-center justify-center flex-col">
                      <div className="w-3/4 h-1/5 flex items-start justify-start p-2 gap-16">
                        <div className="w-fit h-full p-2 flex items-center justify-between flex-col">
                          <label
                            for="input"
                            className="font-sans font-bold -ml-2 text-gray-800"
                          >
                            Education
                          </label>
                          <button className="w-fit h-fit bg-blue-600 p-1 -ml-2 px-4 py-2 rounded-lg text-sm font-sans font-bold text-white">
                            ADD
                          </button>
                        </div>
                        <textarea
                          className="softskill resize-none bg-gray-300 ml-1 p-2 outline-none caret-red-600 rounded-md text-base font-sans font-bold text-gray-900 w-3/5 h-full"
                          placeholder="Education"
                          ref={education}
                          required
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-8">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Interests
                        </label>
                        <div className="w-4/5 h-fit flex items-center justify-center gap-3">
                          <input
                            type="text"
                            className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                            placeholder="Interests"
                            ref={interests}
                            required
                          />
                          <button className="w-fit h-fit bg-blue-600 p-1 px-4 py-2 rounded-lg text-sm font-sans font-bold text-white -ml-1">
                            ADD
                          </button>
                        </div>
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-5">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Skills(soft)
                        </label>
                        <div className="w-4/5 h-fit flex items-center justify-center gap-3">
                          <input
                            type="text"
                            className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                            placeholder="Soft Skills"
                            ref={sskill}
                            required
                          />
                          <button className="w-fit h-fit bg-blue-600 p-1 px-4 py-2 rounded-lg text-sm font-sans font-bold text-white -ml-1">
                            ADD
                          </button>
                        </div>
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Skills(Technical)
                        </label>
                        <div className="w-4/5 h-fit flex items-center justify-center gap-3 -ml-5">
                          <input
                            type="text"
                            className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                            placeholder="Techical Skills"
                            ref={tskill}
                            required
                          />
                          <button className="w-fit h-fit bg-blue-600 p-1 px-4 py-2 rounded-lg text-sm font-sans font-bold text-white -ml-1">
                            ADD
                          </button>
                        </div>
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Work Experience
                        </label>
                        <div className="w-4/5 h-fit flex items-center justify-center gap-3 -ml-7">
                          <input
                            type="text"
                            className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                            placeholder="Work Experience"
                            ref={workexp}
                          />
                          <button className="w-fit h-fit bg-blue-600 p-1 px-4 py-2 rounded-lg text-sm font-sans font-bold text-white -ml-1">
                            ADD
                          </button>
                        </div>
                      </div>
                      <div
                        className="w-3/4  flex items-start justify-start p-2 gap-16"
                        style={{ height: "15%" }}
                      >
                        <div className="w-fit h-full p-2 flex items-center justify-between flex-col gap-2">
                          <label
                            for="input"
                            className="font-sans font-bold -ml-2 text-gray-800"
                          >
                            Description
                          </label>
                          <button className="w-fit h-fit bg-blue-600 -ml-3 p-1 px-4 py-1 rounded-lg text-sm font-sans font-bold text-white">
                            ADD
                          </button>
                        </div>
                        <textarea
                          className="softskill resize-none bg-gray-300 p-2 outline-none caret-red-600 rounded-md text-base font-sans font-bold text-gray-900 w-3/5 h-full -ml-2 "
                          ref={workexpdesc}
                          placeholder="Descriptio Of Your Work Experience"
                        />
                      </div>
                      <div className="w-3/4 h-fit flex items-center justify-start p-2 gap-11">
                        <label
                          for="input"
                          className="font-sans font-bold text-gray-800"
                        >
                          Project
                        </label>
                        <div className="w-4/5 h-fit flex items-center justify-center gap-3">
                          <input
                            type="text"
                            className="bg-gray-300 p-2 rounded-md text-base font-sans font-bold outline-none caret-red-600 text-gray-900 w-3/5"
                            placeholder="Project"
                            ref={project}
                          />
                          <button className="w-fit h-fit bg-blue-600 p-1 px-4 py-2 rounded-lg text-sm font-sans font-bold text-white -ml-1">
                            ADD
                          </button>
                        </div>
                      </div>
                      <div
                        className="w-3/4  flex items-start justify-start p-2 gap-16"
                        style={{ height: "15%" }}
                      >
                        <div className="w-fit h-full p-2 flex items-center justify-between flex-col gap-2">
                          <label
                            for="input"
                            className="font-sans font-bold -ml-2 text-gray-800"
                          >
                            Description
                          </label>
                          <button className="w-fit h-fit bg-blue-600 -ml-2 p-1 px-4 py-1 rounded-lg text-sm font-sans font-bold text-white">
                            ADD
                          </button>
                        </div>
                        <textarea
                          className="softskill resize-none bg-gray-300 p-2 outline-none caret-red-600 rounded-md text-base font-sans font-bold text-gray-900 w-3/5 h-full -ml-2 "
                          ref={projectdesc}
                          placeholder="Description Of Your Project"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Profile;
























