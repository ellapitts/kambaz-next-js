// Courses/[cid]/Assignments page.
// Assignment Page
// Content is search bar, add assignment / group buttons, lists the various assignments' anchors
// "use client";

// import Link from "next/link";
// import { useParams } from "next/navigation";
// export default function Assignments() {
//   const { cid } = useParams(); // Course ID from url

//   return (
//     <div id="wd-assignments">
//       <input placeholder="Search for Assignments" id="wd-search-assignment" />
//       <button id="wd-add-assignment-group">+ Group</button>
//       <button id="wd-add-assignment">+ Assignment</button>
//       <h3 id="wd-assignments-title">
//         ASSIGNMENTS 40% of Total <button>+</button>
//       </h3>

//       <ul id="wd-assignment-list">
//         <li className="wd-assignment-list-item">
//           <Link href={`/Courses/${cid}/Assignments/A1`} className="wd-assignment-link">
//           A1
//           </Link>
//         </li>

//         <li className="wd-assignment-list-item">
//           <Link href={`/Courses/${cid}/Assignments/A2`} className="wd-assignment-link">
//           A2
//           </Link>
//         </li>

//         <li className="wd-assignment-list-item">
//           <Link href={`/Courses/${cid}/Assignments/A3`} className="wd-assignment-link">
//             A3
//           </Link>
//         </li>

//         <li className="wd-assignment-list-item">
//           <Link href={`/Courses/${cid}/Assignments/A4`} className="wd-assignment-link">
//             A4
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import AssignmentControls from "./AssignmentControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  const { cid } = useParams();
  return (
    <div>
      <AssignmentControls />
      <br />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="float-end">
              <span className="badge bg-light text-dark rounded-pill me-2">
                40% of Total
              </span>
              <FaPlus className="fs-4" />
              <IoEllipsisVertical className="fs-4 ms-2" />
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <div className="d-inline-block flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/A1`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  A1 - ENV + HTML
                </Link>
                <div className="text-muted small">
                  <span>Multiple Modules</span> |
                  <span>
                    {" "}
                    <strong>Not available until</strong> Oct 5 at 12:00am
                  </span>{" "}
                  |
                  <br />
                  <span>
                    <strong>Due</strong> Oct 6 at 11:59pm
                  </span>{" "}
                  |<span> 100 pts</span>
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            {/* Repeat for A2 */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <div className="d-inline-block flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/A2`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  A2 -
                </Link>
                <div className="text-muted small">
                  <span>Multiple Modules</span> |
                  <span>
                    {" "}
                    <strong>Not available until</strong> Oct 5 at 12:00am
                  </span>{" "}
                  |
                  <br />
                  <span>
                    <strong>Due</strong> October 06 at 11:59pm
                  </span>{" "}
                  |<span> 100 pts</span>
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            {/* Repeat for A3 */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <div className="d-inline-block flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/A3`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  A3 -
                </Link>
                <div className="text-muted small">
                  <span>Multiple Modules</span> |
                  <span>
                    {" "}
                    <strong>Not available until</strong> Oct 5 at 12:00am
                  </span>{" "}
                  |
                  <br />
                  <span>
                    <strong>Due</strong> October 06 at 11:59pm
                  </span>{" "}
                  |<span> 100 pts</span>
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>

            {/* Repeat for A4 */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <div className="d-inline-block flex-fill">
                <Link
                  href={`/Courses/${cid}/Assignments/A4`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  A4
                </Link>
                <div className="text-muted small">
                  <span>Multiple Modules</span> |
                  <span>
                    {" "}
                    <strong>Not available until</strong> Oct 5 at 12:00am
                  </span>{" "}
                  |
                  <br />
                  <span>
                    <strong>Due</strong> October 06 at 11:59pm
                  </span>{" "}
                  |<span> 100 pts</span>
                </div>
              </div>
              <LessonControlButtons />
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
