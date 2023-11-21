import "../../css/user/UserSettings.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Settings() {
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
    navigate("/");
  };
  const profileclick = (event) => {
    event.preventDefault();
    navigate("/profile");
  };
  const comapniesclick = (event) => {
    event.preventDefault();
    navigate("/companies");
  };
  const signoutclick = (event) => {
    localStorage.removeItem("user");
    localStorage.removeItem("user-auth-key");

    event.preventDefault();
    navigate("/");
    window.location.reload();
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
              src="https://cdn.lordicon.com/dycatgju.json"
              trigger="loop"
              delay="70"
              style={{ width: "70px", height: "70px" }}
            ></lord-icon>
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
                onClick={profileclick}
              >
                Profile
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
          <div className="w-full h-full flex items-center justify-center">
            <button className="w-fit h-fit bg-red-600 font-sans font-extrabold text-white p-4 rounded-lg">
              Delete My Account
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;
