import React from "react";
import { useNavigate } from "react-router-dom";
import { LuEdit } from "react-icons/lu";
import { RiDeleteBin5Line } from "react-icons/ri";

const Courses = ({ course, deleteCourse }) => {
  const navigate = useNavigate();

  // const openCourseURL = (e, url) => {
  //   e.preventDefault();
  //   window.open(url, "_blank");
  // };

  const editCourse = (e, id) => {
    e.preventDefault();
    navigate(`/editCourse/${id}`);
  };

  return (
    <tr key={course.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <a className="text-base text-gray-500">{course.id}</a>
      </td>
      {/* <a
        onClick={(e) => openCourseURL(e, course.url)}
        className="text-black-600 hover:text-black-800 px-5 mr-2 hover:cursor-pointer text-base"
      >
        Open Course
      </a> */}
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div
          className="text-base text-gray-500"
          //  onClick={(e) => openCourseURL(e, course.url)}
        >
          {course.title}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-base text-gray-500">{course.description}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-base">
        <div className="flex">
          <a
            onClick={(e, id) => editCourse(e, course.id)}
            className="text-black-600 hover:text-black-800 px-5 mr-2 hover:cursor-pointer text-base"
          >
            <LuEdit />
          </a>
          <a
            onClick={(e, id) => deleteCourse(e, course.id)}
            className="text-black-600 hover:text-black-800 hover:cursor-pointer text-base"
          >
            <RiDeleteBin5Line />
          </a>
        </div>
      </td>
    </tr>
  );
};

export default Courses;
