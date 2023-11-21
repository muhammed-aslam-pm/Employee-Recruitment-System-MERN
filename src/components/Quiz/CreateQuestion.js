import React, { useReducer, useState } from "react";
import Axios from "axios";
import Header from "../navbar/Header";
import { useNavigate } from "react-router-dom";
const formReducer = (state, event) => {
  if (event.reset) {
    return {
      title: "",
      question: "",
      option_1: "",
      option_2: "",
      option_3: "",
      option_4: "",
      correct_answer: "",
    };
  }
  return {
    ...state,
    [event.name]: event.value,
  };
};

function CreateQuestion() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setSubmitting(true);

    Axios.post("http://localhost:8080/insert", {
      title: formData.title,
      question: formData.question,
      option_1: formData.option_1,
      option_2: formData.option_2,
      option_3: formData.option_3,
      option_4: formData.option_4,
      answer: formData.correct_answer,
    });
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };
  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });
  };

  const homenavclick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <div className="flex flex-col  ">
      <div>
        <nav className="flex items-center justify-between bg-white  border-gray-200 pb-5 pt-5 px-8 py-2">
          <div>
            {" "}
            <Header />
          </div>
          <ul className="flex items-center cursor-pointer">

            <div >
            <li className=" ml-4">
              <lord-icon
                className="cursor-pointer"
                onclick={homenavclick}
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                style={{ width: "30px", height: "30px" }}
              ></lord-icon>
            </li>
            </div>

            <li className="text-base font-sans font-semibold ml-4">Openings</li>
            <li className="text-base font-sans font-semibold ml-4">Meetings</li>

            <li className="ml-4">
              <lord-icon
                src="https://cdn.lordicon.com/zmkotitn.json"
                trigger="loop"
                delay="70"
                style={{ width: "40px", height: "40px" }}
              ></lord-icon>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className=" rounded-xl flex items-center justify-center   ml-10 "
        style={{ height: "100%", width: "96%", backgroundColor: "white" }}
      >
        <form
          className="flex items-center justify-center mt-20"
          onSubmit={handleSubmit}
        >
          <div className=" pb-60 mt-20 p-14 mb-60 flex items-start justify-center flex-col gap-5">
            <label htmlFor="Title" className="text-xl font-bold text-gray-800">
              Title
            </label>
            <select
              className="w-80 p-5  outline-none border-none rounded-lg font-bold"
              name="title"
              style={{ backgroundColor: "lavender" }}
              onChange={handleChange}
              value={formData.title || ""}
            >
              <option value="">Please Select</option>
              <option value="technical">Technical Questions</option>
              <option value="nonTechnical">Non Technical Questions</option>
            </select>

            <label
              htmlFor="Question"
              className="text-xl font-bold text-gray-800"
            >
              Question
            </label>
            <input
              className="w-80 p-5 font-bold rounded-lg resize-none outline-none"
              style={{ height: "90%", backgroundColor: "lavender" }}
              placeholder="Question"
              type="text"
              name="question"
              onChange={handleChange}
              value={formData.question || ""}
            />
          </div>

          <div className="pb-60  p-14 flex items-start justify-center flex-col gap-5">
            <label
              htmlFor="Option1"
              className="text-xl font-bold text-gray-800"
            >
              Option 1
            </label>

            <input
              className="w-80 p-5 font-bold rounded-lg resize-none outline-none"
              style={{ height: "90%", backgroundColor: "lavender" }}
              type="text"
              name="option_1"
              onChange={handleChange}
              value={formData.option_1 || ""}
            />

            <label
              htmlFor="Option2"
              className="text-xl font-bold text-gray-800"
            >
              Option 2
            </label>

            <input
              className="w-80 p-5 font-bold rounded-lg resize-none outline-none"
              style={{ height: "90%", backgroundColor: "lavender" }}
              type="text"
              name="option_2"
              onChange={handleChange}
              value={formData.option_2 || ""}
            />

            <label
              htmlFor="Option3"
              className="text-xl font-bold text-gray-800"
            >
              Option 3
            </label>

            <input
              className="w-80 p-5 font-bold rounded-lg resize-none outline-none"
              style={{ height: "90%", backgroundColor: "lavender" }}
              type="text"
              name="option_3"
              onChange={handleChange}
              value={formData.option_3 || ""}
            />

            <label
              htmlFor="Option4"
              className="text-xl font-bold text-gray-800"
            >
              Option 4
            </label>

            <input
              className="w-80 p-5 font-bold rounded-lg resize-none outline-none"
              style={{ height: "90%", backgroundColor: "lavender" }}
              type="text"
              name="option_4"
              onChange={handleChange}
              value={formData.option_4 || ""}
            />
          </div>

          <div className="w-full h-fit p-4 mb-40 flex items-start justify-center flex-col gap-6 cursor-pointer">
            <label
              htmlFor="correct_answer"
              className="text-xl font-bold text-gray-800"
            >
              Correct Answer
            </label>
            <select
              className="w-full p-4 outline-none border-none rounded-lg font-bold"
              name="correct_answer"
              style={{ backgroundColor: "lavender" }}
              onChange={handleChange}
              value={formData.correct_answer || ""}
            >
              <option
                className="w-full p-4 outline-none border-none rounded-lg font-bold"
                value=""
              >
                --Please choose an option--
              </option>
              <option
                className="w-full p-4 outline-none border-none rounded-lg font-bold"
                value="option_1"
              >
                Option 1
              </option>
              <option
                className="w-full p-4 outline-none border-none rounded-lg font-bold"
                value="option_2"
              >
                Option 2
              </option>
              <option
                className="w-full p-4 outline-none border-none rounded-lg font-bold"
                value="option_3"
              >
                Option 3
              </option>
              <option
                className="w-full p-4 outline-none border-none rounded-lg font-bold"
                value="option_4"
              >
                Option 4
              </option>
            </select>

            <button
              className="w-fit h-fit mt-20 bg-blue-700 text-white rounded-md p-2 px-10 font-sans font-bold shadow-md"
              type="submit"
              onSubmit={() => this.handleSubmit(formData)}
              disabled={submitting}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateQuestion;
