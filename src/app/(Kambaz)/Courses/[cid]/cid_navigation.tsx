// src/app/(Kambaz)/Courses/[cid]/cid_navigation.tsx
// This is the cid/cid_navigation file

"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CourseNavigation() {
  const { cid } = useParams();
  // const pathname = usePathname();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        href={`/Courses/${cid}/Home`}
        className="list-group-item active border-0"
      >
        Home
      </Link>
      <Link
        href={`/Courses/${cid}/Modules`}
        className="list-group-item text-danger border-0"
      >
        Modules
      </Link>
      <Link
        href={`/Courses/${cid}/Piazza`}
        className="list-group-item text-danger border-0"
      >
        Piazza
      </Link>
      <Link
        href={`/Courses/${cid}/Zoom`}
        className="list-group-item text-danger border-0"
      >
        Zoom
      </Link>
      <Link
        href={`/Courses/${cid}/Assignments`}
        className="list-group-item text-danger border-0"
      >
        Assignments
      </Link>
      <Link
        href={`/Courses/${cid}/Quizzes`}
        className="list-group-item text-danger border-0"
      >
        Quizzes
      </Link>
      <Link
        href={`/Courses/${cid}/Grades`}
        className="list-group-item text-danger border-0"
      >
        Grades
      </Link>
      <Link
        href={`/Courses/${cid}/People/Table`}
        className="list-group-item text-danger border-0"
      >
        People
      </Link>
    </div>
  );
}
