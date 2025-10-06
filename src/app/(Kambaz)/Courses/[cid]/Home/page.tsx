// src/app/(Kambaz)/Courses/[cid]/Home/page.tsx ---
/* This file */
// This creates the home screen combining the course status and modules together.
// Combines the Course Status with the Modules to create the Home screen for the course screen.
import Modules from "../Modules/page";
import CourseStatus from "./coursehomepagestatus";

export default function Home() {
  return (
    // Old styling
    // <div id="wd-home">
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td valign="top" width="70%">
    //           <Modules />
    //         </td>
    //         <td valign="top"><CourseStatus /></td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>

    // New
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill me-3">
          <Modules />
        </div>
        <div className="d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
