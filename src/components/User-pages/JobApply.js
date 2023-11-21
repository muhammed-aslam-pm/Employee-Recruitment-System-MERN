import { useEffect,useState,useRef } from "react";
import '../../css/user/JobApply.css';
import { useNavigate } from "react-router-dom";
function JobApply(){
  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [istabed, setIstabed] = useState(true);
    const [selectedFile, setSelectedFile] = useState(null);
    const tab1clr = useRef(null);
    const tab2clr = useRef(null);
    function handleFileInput(event) {
      setSelectedFile(event.target.files[0]);
    }
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const istabedtrue = (event) =>{
      setIstabed(true);
      tab1clr.current.style.backgroundColor = 'aliceblue';
      tab1clr.current.style.color = '#202020';
      tab1clr.current.style.borderBottomColor = 'dodgerblue';
      tab1clr.current.style.borderTopLeftRadius = '0.5rem';
      tab2clr.current.style.backgroundColor = 'white';
      tab2clr.current.style.color = '#202020';
      tab2clr.current.style.borderBottomColor = 'gray';
    }
    const istabedfalse = (event) =>{
      setIstabed(false);
      tab2clr.current.style.backgroundColor = 'aliceblue';
      tab2clr.current.style.color = '#202020';
      tab2clr.current.style.borderBottomColor = 'dodgerblue';
      tab2clr.current.style.borderTopRightRadius = '0.5rem';
      tab1clr.current.style.backgroundColor = 'white';
      tab1clr.current.style.color = '#202020';
      tab1clr.current.style.borderBottomColor = 'gray';
    }

    //signout
const exit = (event) => {
  event.preventDefault();
  navigate("/");
  window.location.reload();
};
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
                    <nav className="flex items-center justify-between bg-white border-b border-gray-200 pb-5 pt-5 px-8 py-2">
                        <div className="text-2xl font-bold">Jobee</div>
                        <ul className="flex items-center cursor-pointer">
                            <li className="text-base font-sans font-semibold ml-4" >Home</li>
                            <li className="text-base font-sans font-semibold ml-4" >Profile</li>
                            <li className="text-base font-sans font-semibold ml-4" >Companies</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={exit}>Exit</li>
                        </ul>
                    </nav>
                    <div className="w-full h-full p-3 flex items-center justify-center flex-col py-10">
                       <div className="w-full h-fit flex items-center justify-between gap-2 cursor-pointer">
                          <div className="w-1/2 h-full flex items-center justify-between text-xl font-sans font-bold text-gray-800 p-2 hover:bg-gray-100 border-b-2 hover:border-blue-400" onClick={istabedtrue} ref={tab1clr}><img src="https://img.icons8.com/ios-glyphs/480/null/resume.png" alt="Job Icon" style={{width:'20px',height:'20px'}}/> Job Apply<span></span></div>
                          <div className="w-1/2 h-full flex items-center justify-between text-xl font-sans font-bold text-gray-800 p-2 hover:bg-gray-100 border-b-2 hover:border-blue-400" onClick={istabedfalse} ref={tab2clr}><img src="https://img.icons8.com/material-rounded/480/null/time-machine.png" alt="Recent Icon" style={{width:'20px',height:'20px'}}/>Job Applied<span></span></div>
                       </div>
                       <div className="w-full h-full bg-violet-700-300 flex items-center justify-center">
                          {istabed ? (
                            <div className="w-full flex items-start justify-start flex-col p-2" style={{height:'80%'}}>
                                <h1 className="text-3xl font-sans font-bold -mt-8 mb-2 text-blue-600">FullStack Developer</h1>
                                <div className="description w-full bg-gray-100 rounded-md p-4 overflow-scroll overflow-x-hidden" style={{height:'75%'}}>
                                    <ul className="list-disc">
                                      <h1 className="text-xl font-sans font-bold ">Full Job Description</h1>
                                      <p className="font-bold font-sans px-2">Cloudstaff is a top-notch provider of smarter outsourcing solutions for clients all around the world. Awarded as one of the Best Companies to Work for in Asia, Cloudstaff is recognized for its exceptional people practices, outstanding employee engagement, and for maintaining ideal working conditions and workplace culture.Together with Cloudstaff, build a career that is prepared for the future. Join a team that values innovation and encourages a workplace where technology raises people. This is what makes Cloudstaffers agile and creative.</p>
                                      <h1 className="text-xl font-sans font-bold py-2">Responsibilities</h1>
                                      <ul className="list-disc px-6 font-bold">
                                        <li>Editing / File corrections on supplied artwork</li>
                                        <li>Standard Prepress fixes: Bleed / Trim marks etc</li>
                                        <li>Mock ups for Job Bags (Printing & checking)</li>
                                        <li>Update & publish knife catalogue.</li>
                                        <li>Ensuring compliance to colour standards / colour tests / profiling etc</li>
                                        <li>Formatting Knife lines for samples (add black dots etc)</li>
                                      </ul>
                                      <h1 className="text-xl font-sans font-bold  py-2">Qualifications</h1>
                                      <ul className="list-disc px-6 font-bold">
                                        <li>Graphic Design understanding & skillset (they often have to fix other designer mistakes and issues)</li>
                                        <li>Understand the production element of different print & finishing machinery & technology.</li>
                                        <li>Have a fairly good IT understanding as all there work is done through workflow systems processes.</li>
                                      </ul>
                                      <h1 className="text-xl font-sans font-bold py-2">About Cloudstaff</h1>
                                      <p className="font-bold font-sans px-2">Cloudstaff was established in 2005 by Australian internet pioneer, Mr. Lloyd Ernst. The company currently has over 4,000 employees headquartered in the Philippines with a leadership team that consists of both Western and Filipino executives. We help companies be more competitive through smarter outsourcing.</p>
                                      <h1 className="text-xl font-sans font-bold  py-2">Why will you love working with Cloudstaff?</h1>
                                      <p className="font-bold font-sans px-2">Cloudstaff is committed to building the #1 Workplace Everywhere, and this is what makes us unique in the outsourcing industry. We take the time to understand what our people need and what it takes to maintain a productive and happy work environment. Everything we do is aimed at providing our staff with a work culture that they can look forward to every single day. From staff engagement initiatives to meaningful perks, we ensure that we do the best we can and that we do it better every time. We take pride in our awesome workforce and we deliberately support their personal and professional development with our specialized training programs and mentoring. Being #1 is not about us, it’s all about our people, it’s all about you!</p>
                                    </ul>
                                </div>
                                <div className="w-full  flex items-start justify-between p-4" style={{height:'15%'}}>
                                  <div className="flex items-start justify-start w-1/2 p-2">
                                    <label htmlFor="upload" className="relative cursor-pointer bg-violet-800 text-white rounded-full shadow-md px-6 py-2 text-sm font-medium  hover:bg-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                      <span>Upload Your Resume</span>
                                      <input id="upload" name="upload" type="file" className="sr-only" onChange={handleFileInput} />
                                    </label>
                                    <p className="ml-3">{selectedFile ? selectedFile.name : ""}</p>
                                  </div>
                                  <div className="w-1/2 h-fit gap-4 flex items-center justify-end p-2">
                                    <button className="w-fit h-fit bg-gray-900 p-2 rounded-lg text-white font-bold font-sans px-10">cancel</button>
                                    <button className="w-fit h-fit bg-blue-800 p-2 rounded-lg text-white font-bold font-sans px-10">Apply</button>
                                  </div>
                                </div>
                            </div>
                          ) : (
                            <div className="description w-full h-full flex items-center justify-center flex-col p-4 gap-2 overflow-scroll overflow-x-hidden">
                                <div className="w-full h-fit bg-gray-100 flex items-start justify-center flex-col p-4 rounded-md">
                                  <h1 className="text-3xl font-sans font-bold mb-2 text-blue-500">FullStack Developer</h1>
                                  <ul className="list-disc px-6">
                                      <li>Application Status : <span className="font-bold">Approved</span></li>
                                      <li>Date & Time : <span className="font-bold">01/02/2023, 11:00 AM</span></li>
                                  </ul>
                                </div>
                                <div className="w-full h-fit bg-gray-100 flex items-start justify-center flex-col p-4 rounded-md">
                                  <h1 className="text-3xl font-sans font-bold mb-2 text-blue-500">Django Developer</h1>
                                  <ul className="list-disc px-6">
                                      <li>Application Status : <span className="font-bold">Pending</span></li>
                                      <li>Date & Time : <span className="font-bold">01/02/2023, 10:00 AM</span></li>
                                  </ul>
                                </div>
                                <div className="w-full h-fit bg-gray-100 flex items-start justify-center flex-col p-4 rounded-md">
                                  <h1 className="text-3xl font-sans font-bold mb-2 text-blue-500">MERN Stack Developer</h1>
                                  <ul className="list-disc px-6">
                                      <li>Application Status : <span className="font-bold">FrontEnd</span></li>
                                      <li>Date & Time : <span className="font-bold">01/02/2023, 1:00 PM</span></li>
                                  </ul>
                                </div>
                                <div className="w-full h-fit bg-gray-100 flex items-start justify-center flex-col p-4 rounded-md">
                                  <h1 className="text-3xl font-sans font-bold mb-2 text-blue-500">BackEnd Developer</h1>
                                  <ul className="list-disc px-6">
                                      <li>Application Status : <span className="font-bold">Pending</span></li>
                                      <li>Date & Time : <span className="font-bold">01/02/2023, 9:00 PM</span></li>
                                  </ul>
                                </div>
                                <div className="w-full h-fit bg-gray-100 flex items-start justify-center flex-col p-4 rounded-md">
                                  <h1 className="text-3xl font-sans font-bold mb-2 text-blue-500">Angular Developer</h1>
                                  <ul className="list-disc px-6">
                                      <li>Application Status : <span className="font-bold">Pending</span></li>
                                      <li>Date & Time : <span className="font-bold">01/02/2023, 11:00 AM</span></li>
                                  </ul>
                                </div>
                            </div>
                          )}
                       </div>
                    </div>
                </div>
            )}
            </div>
    );
}

export default JobApply;
