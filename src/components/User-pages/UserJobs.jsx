import '../../css/user/UserJobs.css';
import fsd from '../../assets/fsd.jpg'
import fsd4 from "../../assets/fsd4.gif";
import fsd5 from "../../assets/fsd5.gif";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


function Jobs(){

    const [isChecked, setIsChecked] = useState(true);
    const [job, setJob] = useState([]);
    const [notify, setNotify] = useState([]);
    const MyUserId = localStorage.getItem("user");
    const URL = "http://localhost:5000/";






    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchJob();
        fetchJobRequest();
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);



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

      const checkclick = () => {
        setIsChecked(false);
      };
      const checkclickfalse = () => {
        setIsChecked(true);
      };




    const navigate = useNavigate();
    const homeclick = (event) => {
        event.preventDefault();
        navigate('/');
    }
    const profileclick = (event) => {
        event.preventDefault();
        navigate('/profile');
    }
    const comapniesclick = (event) => {
        event.preventDefault();
        navigate('/companies');
    }
    const signoutclick = (event) => {
        event.preventDefault();
        navigate('/');
    }
    return(
        <div>
            {isLoading ? (
                <div className="w-full bg-white-100 flex" style={{height:'100vh',alignItems:'center',justifyContent:'center'}}>
                    <div>
                    <lord-icon
                            src="https://cdn.lordicon.com/oezixobx.json"
                            trigger="loop"
                            delay="70"
                            style={{width:'70px',height:'70px'}}>
                        </lord-icon>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-screen">
                    <nav className="flex items-center justify-between bg-white  pb-5 pt-5 px-8 py-2">
                        <div className="text-2xl font-bold">Jobee</div>
                        <ul className="flex items-center cursor-pointer">
                            <li className="text-base font-sans font-semibold ml-4" onClick={homeclick}>Home</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={profileclick}>Profile</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={comapniesclick}>Companies</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={signoutclick}>Sign out</li>
                        </ul>
                    </nav>



                    <div
                className="rounded-[20px] flex items-center justify-center flex-row flex-wrap gap-6"
                style={{ width: "100%", minHeight: "100%",top:"0" }}
               
              >
                
{/* model1 */}
                <div
                    className="bg-white rounded-[15px] p-6 "
                    style={{ width: "30%", height: "40%" }}
                  >
                      <img
                        src={fsd5}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    
                    <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                      <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900 uppercase">
                      Web Developer
                      </h1>
                      <h1 className="text-xs font-kern font-semibold ml-5 pr-5 text-gray-700 ">
                      We are looking for a website Developer ( preferably Wordpress CMS) responsible for both back-end and front-end development,Building wordpress theme from scratch
Converting Figma / PSD / Adobe XD designs to responsive frontend pages using HTML5, CSS3, JavaScript.
                      </h1>
                    </div>
                    
                    <div className="w-full h-1/5 pt-10 pb-[10rem] rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
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
                        className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                        style={{ width: "45%" }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>



{/* model2                   */}

<div
                    className="bg-white rounded-[15px] p-6 "
                    style={{ width: "30%", height: "40%" }}
                  >
                      <img
                        src={fsd5}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    
                    <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                      <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900 uppercase">
                      Web Developer
                      </h1>
                      <h1 className="text-xs font-kern font-semibold ml-5 pr-5 text-gray-700 ">
                      We are looking for a website Developer ( preferably Wordpress CMS) responsible for both back-end and front-end development,Building wordpress theme from scratch
Converting Figma / PSD / Adobe XD designs to responsive frontend pages using HTML5, CSS3, JavaScript.
                      </h1>
                    </div>
                    
                    <div className="w-full h-1/5 pt-10 pb-[10rem] rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
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
                        className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                        style={{ width: "45%" }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>

{/* model3 */}

<div
                    className="bg-white rounded-[15px] p-6 "
                    style={{ width: "30%", height: "40%" }}
                  >
                      <img
                        src={fsd5}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    
                    <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                      <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900 uppercase">
                      Web Developer
                      </h1>
                      <h1 className="text-xs font-kern font-semibold ml-5 pr-5 text-gray-700 ">
                      We are looking for a website Developer ( preferably Wordpress CMS) responsible for both back-end and front-end development,Building wordpress theme from scratch
Converting Figma / PSD / Adobe XD designs to responsive frontend pages using HTML5, CSS3, JavaScript.
                      </h1>
                    </div>
                    
                    <div className="w-full h-1/5 pt-10 pb-[10rem] rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
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
                        className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                        style={{ width: "45%" }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
{/* model4 */}

<div
                    className="bg-white rounded-[15px] p-6 "
                    style={{ width: "30%", height: "40%" }}
                  >
                      <img
                        src={fsd5}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    
                    <div className="w-full h-2/5 flex flex-col gap-4 p-1 bg-white">
                      <h1 className="text-xl font-sans font-bold text-left ml-5 text-gray-900 uppercase">
                      Web Developer
                      </h1>
                      <h1 className="text-xs font-kern font-semibold ml-5 pr-5 text-gray-700 ">
                      We are looking for a website Developer ( preferably Wordpress CMS) responsible for both back-end and front-end development,Building wordpress theme from scratch
Converting Figma / PSD / Adobe XD designs to responsive frontend pages using HTML5, CSS3, JavaScript.
                      </h1>
                    </div>
                    
                    <div className="w-full h-1/5 pt-10 pb-[10rem] rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
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
                        className="p-1 bg-blue-700 text-base font-sans font-semibold tracking-wide text-white rounded-lg hover:scale-105"
                        style={{ width: "45%" }}
                      >
                        APPLY
                      </button>
                    </div>
                  </div>

                {/* New jobs */}
                {job.map((data) => (
                  <div
                    key={data.id}
                    className="bg-white rounded-[15px] p-6 "
                    style={{ width: "30%", height: "40%" }}
                  >
                    {data.categories.includes("Software") ? (
                      <img
                        src={fsd}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
                      />
                    ) : (
                      <img
                        src={fsd4}
                        alt="pic"
                        className="h-2/5 pl-20 w-90 rounded-tl-lg "
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
                    
                    <div className="w-full h-1/5 pt-10 pb-[10rem] rounded-bl-lg rounded-br-lg flex items-center justify-center cursor-pointer gap-5">
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





                    {/* <div className='w-full flex items-center justify-start flex-col p-1 gap-2' style={{height:'100vh',backgroundColor:'white'}}>
                        <div className='flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className=' flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className='flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src={fsd} alt='pic' className='h-2/6 w-1/2'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>FULLSTACK DEVELOPER</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>We Are a Fast-paced, dynamic organization looking for a skilled and experienced senior fullstack development engineer to join our growing team...</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Qualification</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>React : 1 year (Required)</li>
                                        <li>Bachelor's (Preffered)</li>
                                        <li>Node Js : 1 year (Preffered)</li>
                                        <li>Cloud Computing : 1 year (Preffered)</li>
                                        <li>HTML,CSS,Javascript : 1 year (Preffered)</li>
                                    </ul>
                                </div>
                                <div className='w-4/5 h-16 flex items-center justify-center gap-2'>
                                    <button className='h-10 bg-blue-700 p-2 text-sm font-sans font-semibold tracking-wide text-white pl-4 pr-4 rounded-lg hover:scale-105' style={{width:'100%'}}>APPLY</button>
                                </div>
                            </div>
                            
                        </div>
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default Jobs;