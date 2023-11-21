import "../../css/user/UserCompanies.css";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Companies(){
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    const navigate = useNavigate();
    const homeclick = (event) => {
        event.preventDefault();
        navigate('/');
    }
    const profileclick = (event) => {
        event.preventDefault();
        navigate('/profile');
    }
    const jobsclick = (event) => {
        event.preventDefault();
        navigate('/jobs');
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
                            <li className="text-base font-sans font-semibold ml-4" onClick={jobsclick}>Jobs</li>
                            <li className="text-base font-sans font-semibold ml-4" onClick={signoutclick}>Sign out</li>
                        </ul>
                    </nav>
                    <div className='w-full flex items-center justify-start flex-col p-1 gap-2' style={{height:'100vh',backgroundColor:'white'}}>
                        <div className='flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/color/480/null/google-logo.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Google</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Google is a multinational technology company that specializes in internet-related services and products.</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>UX Designer</li>
                                        <li>Data Scientist</li>
                                        <li>Product Manager</li>
                                        <li>Marketing Manager, Sales Manager, and many more </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/color/480/null/amazon.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Amazon</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Amazon is an American multinational technology company that focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Developer,</li>
                                        <li>Cloud Engineer</li>
                                        <li>Data Analyst</li>
                                        <li>Operations Manager</li>
                                        <li>Human Resources</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/ios-filled/480/null/mac-os.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Apple</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Apple is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>UX/UI Designer</li>
                                        <li>Hardware Engineer</li>
                                        <li>Product Manager</li>
                                        <li>Data Analyst</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className=' flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                        <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/color/480  /null/microsoft.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Microsoft</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Microsoft is an American multinational technology company that develops, licenses, and sells computer software, consumer electronics, and personal computers</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>Program Manager </li>
                                        <li>Data Scientist</li>
                                        <li>Product Manager</li>
                                        <li>Technical Writer</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/fluency/480/null/facebook-new.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Facebook</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Facebook is an American social media and technology company that allows people to connect and share information through its online platform</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li> Software Engineer</li>
                                        <li>UX Designer</li>
                                        <li>Data Scientist</li>
                                        <li>Product Designer</li>
                                        <li>Marketing Manager</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/color/480/null/ibm.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>IBM</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>IBM is an American multinational technology company that provides hardware, software, and consulting services</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>Systems Administrator</li>
                                        <li>Technical Consultant</li>
                                        <li>Sales Manager</li>
                                        <li>Human Resources</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center p-1 gap-4' style={{width:'100%',height:'auto'}}>
                        <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/color/480/null/oracle-logo.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Oracle</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Oracle is an American multinational technology company that specializes in computer software, cloud engineering, and database technology</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>Database Administrator</li>
                                        <li>Technical Writer</li>
                                        <li>Sales Manager</li>
                                        <li>Human Resources</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/windows/480/null/adobe-logo.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Adobe</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Adobe is an American multinational software company that specializes in creative software products</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>Systems Administrator</li>
                                        <li>Technical Writer</li>
                                        <li>Sales Manager</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='shadow-md flex items-center justify-center flex-col gap-4 rounded-lg' style={{width:'31.666%',height:'73vh',backgroundColor:'lavender'}}>
                                <img src="https://img.icons8.com/color/480/null/samsung.png" alt='pic' className='h-2/6'/>
                                <div className='flex flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Samsung Electronics</h1>
                                    <h1 className='text-sm font-sans font-semibold text-gray-700'>Samsung Electronics is a multinational electronics company based in South Korea that produces consumer electronics, semiconductors, home appliances, and other electronic components.</h1>
                                </div>
                                <div className='flex  flex-col gap-2' style={{width:'80%',height:'auto'}}>
                                    <h1 className='text-1xl font-sans font-extrabold text-gray-900'>Jobs</h1>
                                    <ul className='list-disc ml-10 text-base font-sans font-semibold text-gray-700'>
                                        <li>Software Engineer</li>
                                        <li>Hardware Engineer</li>
                                        <li>Technical Consultant</li>
                                        <li>Sales Executive</li>
                                        <li>Marketing Manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Companies;