import "../../css/hr/JobPosting.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Header from "../navbar/Header";
import axios from "axios";
function JobPosting() {
  const URL = "http://localhost:5000/";
  const MyUserId = localStorage.getItem("hr");

  const [isLoading, setIsLoading] = useState(true);
  const [isStepOne, setIsStepOne] = useState(true);
  const [formValues, setFormValues] = useState({
    jobName: "",
    categories: "",
    desc: "",
    salary: "",
    Image: "",
    CreatedHr: MyUserId,
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${URL}job/register`, formValues);
    console.log(response.data);
  };
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
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

  const exitclick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const signoutclick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const IsStepOneTrue = () => {
    setIsStepOne(true);
  };
  const IsStepOneFalse = () => {
    setIsStepOne(false);
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
              src="https://cdn.lordicon.com/oezixobx.json"
              trigger="loop"
              delay="70"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen ">
          <nav className="flex items-center justify-between bg-white border-gray-200 pb-5 pt-5 px-8 py-2">
            <div className="flex items-center justify-between pb-10 "><Header /></div>
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
                Openings
              </li>
              <li
                className="text-base font-sans font-semibold ml-4"
                onClick={comapniesclick}
              >
                Meetings
              </li>
              <li
                className="text-base font-sans font-semibold ml-4"
                onClick={exitclick}
              >
                exit
              </li>
            </ul>
          </nav>

          <div className="w-full h-full flex items-start justify-center flex-col ">
          
            <form
              className="w-full h-full flex items-center justify-center mt-5"
              onSubmit={handleSubmit}
            >
              <div
                className="p-6 h-full rounded-xl shadow-md flex items-center justify-center gap-2 mt-10"
                style={{
            
                  width: "95%",
                  backgroundColor: "white",
                }}
              >
                <div className='p-6 rounded-xl flex items-center justify-center gap-2 -mt-8' style={{height:'85%',width:'95%',backgroundColor:'white'}}>
                
                
                
                <div {...getRootProps()} className="flex items-center justify-center border-2 border-dashed border-blue-400 p-2 rounded-xl text-center overflow-hidden" style={{width:'50%',height:'100%'}}>
                                        <input {...getInputProps()} className='outline-none'  onChange={handleChange}/>
                                            {files.length === 0 ? (
                                                isDragActive ? (
                                                    <p className="text-gray-600 font-sans font-bold flex items-center justify-center flex-col"><span class="material-symbols-outlined text-8xl">add_photo_alternate</span>Drop the files here ...</p>
                                                ) : (
                                                    <p className="text-gray-600 font-sans font-bold flex items-center justify-center flex-col"><span class="material-symbols-outlined text-8xl">add_photo_alternate</span>Drag 'n' drop some files here, or click to select files</p>
                                                )
                                            ) : (
                                        <div>
                                            <img className="mx-auto mb-2" src={files[0].preview} alt={files[0].name}/>
                                            <p className="text-gray-600">{files[0].name}</p>
                                        </div>
                                            )}
                </div>
                <div className='w-1/2 h-full rounded-xl'>
                  <div className="w-full h-fit p-4 flex items-start justify-center flex-col gap-2">
                    <label
                      htmlFor="JobName"
                      className="text-xl font-bold text-gray-800"
                    >
                      Job Name
                    </label>
                    <input
                      type="text"
                      className="font-bold w-full p-3 rounded-lg"
                      name="jobName"
                      placeholder="Job Name"
                      style={{ backgroundColor: "lavender" }}
                      value={formValues.jobName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full h-fit p-4 flex items-start justify-center flex-col gap-2 cursor-pointer">
                    <label
                      htmlFor="Jobcategory"
                      className="text-xl font-bold text-gray-800"
                    >
                      Job Category
                    </label>
                    {/* <select
                        className="w-full p-4 outline-none border-none rounded-lg font-bold"
                        name="Jobcategory"
                        style={{ backgroundColor: "lavender" }}
                      >
                        <option>Select Job Category</option>
                        <option>FrontEnd Developer</option>
                        <option>BackEnd Developer</option>
                        <option>FullStack Developer</option>
                        <option>Python Developer</option>
                      </select> */}
                    <input
                      type="text"
                      className="font-bold w-full p-3 rounded-lg"
                      name="categories"
                      placeholder="categories"
                      style={{ backgroundColor: "lavender" }}
                      value={formValues.categories}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full h-2/5 p-4 flex items-start justify-center flex-col gap-2">
                    <label
                      htmlFor="JobDescription"
                      className="text-xl font-bold text-gray-800"
                    >
                      Job Description
                    </label>
                    <textarea
                      className="w-full p-2 font-bold rounded-lg resize-none outline-none"
                      style={{ height: "90%", backgroundColor: "lavender" }}
                      placeholder="Description"
                      name="desc"
                      value={formValues.desc}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="w-full h-fit p-4 flex items-start justify-center flex-col gap-2 cursor-pointer">
                    <label
                      htmlFor="Jobcategory"
                      className="text-xl font-bold text-gray-800"
                    >
                      Salary
                    </label>
                    {/* <select
                        className="w-full p-4 outline-none border-none rounded-lg font-bold"
                        name="Jobcategory"
                        style={{ backgroundColor: "lavender" }}
                      >
                        <option>Select Job Category</option>
                        <option>FrontEnd Developer</option>
                        <option>BackEnd Developer</option>
                        <option>FullStack Developer</option>
                        <option>Python Developer</option>
                      </select> */}
                    <input
                      type="text"
                      className="font-bold w-full p-3 rounded-lg"
                      name="salary"
                      placeholder="Salary"
                      value={formValues.salary}
                      onChange={handleChange}
                      style={{ backgroundColor: "lavender" }}
                    />
                  </div>
                  <div className="w-full h-fit p-1 flex items-ceneter justify-end">
                    <button
                      className="w-fit h-fit bg-blue-700 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md"
                      //   onClick={IsStepOneFalse}
                      type="submit"
                      //   onClick={() => handleSubmit()}
                    >
                      Post
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPosting;
