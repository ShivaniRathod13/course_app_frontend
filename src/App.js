import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseList from "./components/CourseList";
import AddCourse from "./components/AddCourse";
import UpdateCourse from "./components/UpdateCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<CourseList />} />
          <Route path="/" element={<CourseList />}></Route>
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/courseList" element={<CourseList />} />
          <Route path="/editCourse/:id" element={<UpdateCourse />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
