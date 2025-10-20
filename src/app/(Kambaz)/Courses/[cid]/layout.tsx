/* src/app/(Kambaz)/Courses/[cid]/layout file is responsible for the course-specific navigation sidebar.
- should have Home, Modules, Piazza, Zoom, Assignments, Quizzes, Grades, People. 
*/
// Presereve the Kambaz navigation and layout for all courses pages.
import { ReactNode } from "react"; // needed for children
import CourseNavigation from "./cid_navigation"; // needed for the course nav. sidebar
import { FaAlignJustify } from "react-icons/fa"; // needed for the heading
import { courses } from "../../Database"; // used to find the current course
 
export default async function CoursesLayout({ children, params }: { children: ReactNode; params: { cid: string } | Promise<{ cid: string}>;}) {
  const { cid } = await params; 
  const course = courses.find((course) => course._id === cid);
  
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course?.name || "Course Not Found"}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block" style={{ width: "320px" }}>
          <CourseNavigation />
        </div>
        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
