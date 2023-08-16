import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseServices from "../services/CourseServices";
import Courses from "./Courses";

const CourseList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState(null);

  // Example course data
  const courseData = [
    //   {
    //     id: 1,
    //     title: "Core Java",
    //     description: "Learn Core Java programming.",
    //     url: "https://www.corejavatpoint.com",
    //   },
    // {
    //   id: 2,
    //   title: "React JS",
    //   description: "Master React JS development.",
    //   url: "https://www.reactjs.org",
    // },
    //   // Add more courses with URLs
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await CourseServices.getCourse();
        setCourse(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
      // setCourse(courseData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteCourse = (e, id) => {
    e.preventDefault();
    CourseServices.deleteCourse(id).then((res) => {
      if (course) {
        setCourse((prevElement) => {
          return prevElement.filter((course) => course.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addCourse")}
          className="rounded bg-stone-600 hover:bg-stone-700 text-white px-6 py-2 font-semibold"
        >
          Add Course
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-stone-200">
            <tr>
              <th className="text-left text-base font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Course Id
              </th>
              <th className="text-left text-base font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Course Title
              </th>
              <th className="text-left text-base font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Course Description
              </th>
              <th className="text-left text-base font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {course.map((course) => (
                <Courses
                  course={course}
                  deleteCourse={deleteCourse}
                  key={course.id}
                ></Courses>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default CourseList;
