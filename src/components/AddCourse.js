import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseServices from "../services/CourseServices";

const AddCourse = () => {
  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setCourse({ ...course, [e.target.name]: value });
  };

  const saveCourse = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    CourseServices.saveCourse(course)
      .then((response) => {
        console.log(response);
        navigate("/courseList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setCourse({
      id: "",
      title: "",
      description: "",
    });
  };

  return (
    <div className="flex justify-center items-center mt-8 max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Course</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Course Id
          </label>
          <input
            type="text"
            name="id"
            value={course.id}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Course Title
          </label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Course Description
          </label>
          <input
            type="text"
            name="description"
            value={course.description}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveCourse}
            className="rounded text-white font-semibold bg-stone-500 hover:bg-stone-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-stone-600 hover:bg-stone-800 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
