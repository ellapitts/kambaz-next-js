import CourseNavigation from "./navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes } from "react-router";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2> <hr />
      <table>
        <tr>
          <td valign="top"> ... </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<div>Assignments</div>} />
              <Route
                path="Assignments/:aid"
                element={<div>Assignment Editor</div>}
              />
              <Route path="People" element={<div>People</div>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
