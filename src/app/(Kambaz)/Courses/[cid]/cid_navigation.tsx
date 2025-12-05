// // src/app/(Kambaz)/Courses/[cid]/cid_navigation.tsx
// // This is the cid/cid_navigation file
// "use client";
// import Link from "next/link";
// import { useParams } from "next/navigation";

// export default function CourseNavigation() {
//   const { cid } = useParams();
//   // const pathname = usePathname();
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link
//         href={`/Courses/${cid}/Home`}
//         className="list-group-item active border-0"
//       >
//         Home
//       </Link>
//       <Link
//         href={`/Courses/${cid}/Modules`}
//         className="list-group-item text-danger border-0"
//       >
//         Modules
//       </Link>
//       <Link
//         href={`/Courses/${cid}/Piazza`}
//         className="list-group-item text-danger border-0"
//       >
//         Piazza
//       </Link>
//       <Link
//         href={`/Courses/${cid}/Zoom`}
//         className="list-group-item text-danger border-0"
//       >
//         Zoom
//       </Link>
//       <Link
//         href={`/Courses/${cid}/Assignments`}
//         className="list-group-item text-danger border-0"
//       >
//         Assignments
//       </Link>
//       <Link
//         href={`/Courses/${cid}/Quizzes`}
//         className="list-group-item text-danger border-0"
//       >
//         Quizzes
//       </Link>
//       <Link
//         href={`/Courses/${cid}/Grades`}
//         className="list-group-item text-danger border-0"
//       >
//         Grades
//       </Link>
//       <Link
//         href={`/Courses/${cid}/People/Table`}
//         className="list-group-item text-danger border-0"
//       >
//         People
//       </Link>
//     </div>
//   );
// }

import Link from "next/link";
export default function CourseNavigation() {
  return (
    <div id="wd-courses-navigation">
      <Link href="/Courses/1234/Home" id="wd-course-home-link">Home</Link><br/>
      <Link href="/Courses/1234/Modules" id="wd-course-modules-link">Modules
        </Link><br/>
      <Link href="/Courses/1234/Piazza" id="wd-course-piazza-link">Piazza</Link><br/>
      <Link href="/Courses/1234/Zoom" id="wd-course-zoom-link">Zoom</Link><br/>
      <Link href="/Courses/1234/Assignments" id="wd-course-assignments-link">
          Assignments</Link><br/>
      <Link href="/Courses/1234/Quizzes" id="wd-course-quizzes-link">Quizzes
        </Link><br/>
      <Link href="/Courses/1234/Grades" id="wd-course-grades-link">Grades</Link><br/>
      <Link href="/Courses/1234/People/Table" id="wd-course-people-link">People</Link><br/>
    </div>
  );}
