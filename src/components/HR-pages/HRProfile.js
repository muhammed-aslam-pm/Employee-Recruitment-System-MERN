import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


  

const CompanyProfile = () => {
const [hr, setUser] = useState({});
const [isLoading, setIsLoading] = useState(true);
const MyUserId = localStorage.getItem("hr");
const navigate = useNavigate();

const fetchUser = async () => {
    await axios
      .post(`${URL}hr/getUser`, {
        hrId: MyUserId,
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




    const signoutclick = (event) => {
        localStorage.removeItem("hr");
        localStorage.removeItem("hr-auth-key");
    
        event.preventDefault();
        navigate("/"); 

    window.location.reload();
};









  return (
    <div className="bg-white  w-screen h-screen justify-center p-1">
        <div className="  container border-4 h-25 w-screen bg-sky-900 gap-x-4 ">  
                        <nav className="p-2 flex ">
                            <div className=" flex ">
                            <h1 className='text-white origin-left font-bold text-3xl duration-300'>Jobee</h1>
                            </div>
                            <div className="flex items-center pl-96 gap-8 ml-auto ">
                            <button className="bg-white hover:bg-blue-700 text-sky-900 font-bold py-2 px-4 rounded ">
                                Home
                            </button>
                            <button className="bg-white hover:bg-blue-700 text-sky-900 font-bold py-2 px-4 rounded ">
                                Edit
                            </button>
                            <button className="bg-white hover:bg-blue-700 text-sky-900 font-bold py-2 px-4 rounded "
                            onClick={signoutclick}
                            >
                                Back
                            </button>
                            </div>
                        </nav>
        </div>
        <div className='p-8 w-screen flex gap-8 justify-center'>
            <div className="flex flex-col items-center">
                <img
                className="w-64 h-64 rounded-lg object-cover shadow-lg mb-8"
                src="https://th.bing.com/th/id/OIP.UcvCd1dT3lTUKjdO_6tW4wHaEE?pid=ImgDet&rs=1"
                alt="Company Profile Photo"
                />
                <h1 className="text-4xl font-bold">Company Name</h1>
            </div>
        </div>
        <div className='p-8 flex  w-screen justify-center gap-8 bg-white '>
            <div className='bg-white w-64 h-64 rounded-lg object-fill shadow-lg overflow-hidden'>
                <div className='bg-sky-900 rounded-lg h-10'>
                    <p className="text-white text-lg text-center mb-4">
                    Description of the company.
                    </p>
                </div>
                <p className='text-sky-900 text-lg text-center mb-4 '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
            <div className='bg-white w-64 h-64 rounded-lg object-fill shadow-lg overflow-hidden border-sky-900'>
                <div className='bg-sky-900 rounded-lg h-10'>
                    <p className="text-white text-lg text-center mb-4">
                    Number of employees
                    </p>
                </div>
                <p className='text-sky-900 text-lg text-center mb-4 '>
                    100
                </p>
            </div>
            <div className='bg-white w-64 h-64 rounded-lg object-fill shadow-lg overflow-hidden border-sky-900'>
                <div className='bg-sky-900 rounded-lg h-10'>
                    <p className="text-white text-lg text-center mb-4">
                    Location
                    </p>
                </div>
                <p className='text-sky-900 text-lg text-center mb-4 justify-center '>
                    Bangalur
                </p>
            </div>
        </div>
        <div className='bg-gray-100  justify-center'>
            <div className='w-screen h-14 bg-sky-900 p-4 justify-center text-center'>
                <h2 className='text-white origin-left font-bold text-3xl mb-0 justify-center'>Contact Info</h2>
            </div>
            <div className='p-8 flex  w-screen justify-center gap-8'>
                <div className='bg-white w-64 h-24 rounded-lg object-fill shadow-lg overflow-hidden border-sky-900'>
                    <div className='bg-sky-900 rounded-lg h-10'>
                        <p className="text-white text-lg text-center mb-4">
                        Phone No
                        </p>
                    </div>
                    <p className='text-sky-900 text-lg text-center mb-4 justify-center '>
                        +9165896532
                    </p>
                </div>

                <div className='bg-white w-64 h-24 rounded-lg object-fill shadow-lg overflow-hidden border-sky-900'>
                    <div className='bg-sky-900 rounded-lg h-10'>
                        <p className="text-white text-lg text-center mb-4">
                        Email
                        </p>
                    </div>
                    <p className='text-sky-900 text-lg text-center mb-4 justify-center '>
                        company@gmail.com
                    </p>
                </div>

                <div className='bg-white w-64 h-24 rounded-lg object-fill shadow-lg overflow-hidden border-sky-900'>
                    <div className='bg-sky-900 rounded-lg h-10'>
                        <p className="text-white text-lg text-center mb-4">
                        Address
                        </p>
                    </div>
                    <p className='text-sky-900 text-lg text-center mb-4 justify-center '>
                        company,Asraf nagar,bangalur
                    </p>
                </div>
            </div>
            <div className="px-6 py-4 text-center justify-center">
                <button className="bg-sky-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
                </button>
            </div>
        </div>
    </div>
  );
};

export default CompanyProfile;
