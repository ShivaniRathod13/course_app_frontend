import axios from "axios";

const COURSE_API_BASE_URL = "http://localhost:9093/api/v1/courses";

class CourseServices {
  // saveCourse(course) {
  //   console.log(course, "course");
  //   return axios.post(COURSE_API_BASE_URL + course, {
  //     method: "POST",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(course),
  //   });
  // }

  saveCourse(course) {
    return axios.post(COURSE_API_BASE_URL, course, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(course),
    });
  }

  getCourse() {
    return axios.get(COURSE_API_BASE_URL, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  }

  deleteCourse(id) {
    return axios.delete(COURSE_API_BASE_URL + "/" + id);
  }

  getCourseById(id) {
    return axios.get(COURSE_API_BASE_URL + "/" + id);
  }

  updateCourse(course, id) {
    return axios.put(COURSE_API_BASE_URL + "/" + id, course);
  }
}

export default new CourseServices();
