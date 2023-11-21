import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";

//Login
import LoginRegPage from "./components/login/LoginRegistrationPage";
import LoginPage from "./components/login/Login";

//Registration page
import Registration from "./components/registration/registration";
import Resetpassword from "./pages/ResetPassword";

//Quiz & Meet
import Meethome from "./components/Meet/MeetHome";
import Room from "./components/Meet/Room";
import QuestionBox from "./components/Quiz/QuestionBox";

//HR

import HRHome from "./components/HR-pages/marketplace/index";
import HrProfile from "./components/HR-pages/HRProfile";
import JobApplication from "./components/User-pages/JobApplication";
import JobPosting from "./components/HR-pages/JobPosting";
import CreateQ from "./components/Quiz/CreateQuestion";






import UserHomePage from "./components/User-pages/UserHome";
import UserProf from "./components/User-pages/UserProfile";
import UserJobs from "./components/User-pages/UserJobs";
import UserJobApplyed from "./components/User-pages/JobApply";
import UserMeetings from "./components/User-pages/UserMeetings";
import UserCompanies from "./components/User-pages/UserCompanies";
import UserSettings from "./components/User-pages/UserSettings";




import "./css/style.css";

function App() {
  const [userToken, setUserToken] = useState(null);
  const [hrToken, setHrToken] = useState(null);
  useEffect(() => {
    const MyUserToken = localStorage.getItem("user-auth-key");
    const MyHrToken = localStorage.getItem("hr-auth-key");
    if (MyUserToken) {
      setUserToken(MyUserToken);
    }
    if (MyHrToken) {
      setHrToken(MyHrToken);
    }
  }, []);

  if (hrToken !== null && userToken === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HRHome />} />

          <Route path="/hrPro" element={<HrProfile />} />
          <Route path="/jobapp" element={<JobApplication />} />
          <Route path="/jobpost" element={<JobPosting />} />
          <Route path="/postest" element={<CreateQ />} />
          <Route path="/meethome" element={<Meethome />} />
          <Route path="/room/:roomID" element={<Room />} />
        </Routes>
      </BrowserRouter>
    );
  }
  if (userToken !== null && hrToken === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserHomePage />} />
          <Route path="/profile" element={<UserProf />} />
          <Route path="/jobs" element={<UserJobs />} />
          <Route path="/jobapped" element={<UserJobApplyed />} />
          <Route path="/companies" element={<UserCompanies />} />
          <Route path="/settings" element={<UserSettings />} />

          <Route path="/meethome" element={<Meethome />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route exact path="/assesmentest" element={<QuestionBox />} />


        </Routes>
      </BrowserRouter>
    );
  }
  if (userToken === null && hrToken === null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />

          {/*login*/}
          <Route path="/logreg" element={<LoginRegPage />} />
          {/* Optional login */}
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          {/* Registraton */}

          <Route path="/reg" element={<Registration />} />
          {/* Resetpassword */}
          <Route path="/reset-password" element={<Resetpassword />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
