// This is the Modules page for a specific course identified by [cid]

// export default function Modules() {
//   return (
//     <div>
//       {/* Top Bar with Collapse All, View Progress, Publish All (dropdown) Red +Module Bar */}
//       <div
//         id="wd-modules-controls"
//         className="text-nowrap d-flex justify-content-end mb-3"
//       >
//         <button className="btn btn-lg btn-secondary me-1">Collapse All</button>
//         <button className="btn btn-lg btn-secondary me-1">View Progress</button>
//         <div className="dropdown d-inline me-1">
//           <button
//             className="btn btn-lg btn-secondary dropdown-toggle"
//             type="button"
//             data-bs-toggle="dropdown"
//           >
//             Publish All
//           </button>
//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="#">
//                 Publish All Modules and Items
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Publish Modules Only
//               </a>
//             </li>
//             <li>
//               <a className="dropdown-item" href="#">
//                 Unpublish All
//               </a>
//             </li>
//           </ul>
//         </div>
//         <button className="btn btn-lg btn-danger">+ Module</button>
//       </div>
//       <ul id="wd-modules">
//         <li className="wd-module">
//           <div className="wd-title">
//             Week 1 - Lecture 1: Course Introduction & Syllabus
//           </div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">Introduction to the course</li>
//                 <li className="wd-content-item">
//                   Overview of syllabus and expectations
//                 </li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 2 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 2</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 3 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 3</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 4 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 4</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 5 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 5</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 6 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 6</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 7 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 7</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 8 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 8</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 9 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 9</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 10 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 10</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 11 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 11</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>

//         {/* Week 12 */}
//         <li className="wd-module">
//           <div className="wd-title">Week 12</div>
//           <ul className="wd-lessons">
//             <li className="wd-lesson">
//               <span className="wd-title">LEARNING OBJECTIVES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">Final exam preparation</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">SLIDES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">LECTURE NOTES</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//             <li className="wd-lesson">
//               <span className="wd-title">READING</span>
//               <ul className="wd-content">
//                 <li className="wd-content-item">TBD</li>
//               </ul>
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

// This is the Modules page for a specific course identified by [cid]

import ModuleControls from "./ModuleControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <ModuleControls />
      <br />
      <br />
      <br />
      <br />

      <ListGroup className="rounded-0" id="wd-modules">
        {/* Week 1 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 1 - Lecture 1: Course
            Introduction & Syllabus <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 2 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 2: Lesson ...{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 3 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 3: <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        {/* Week 4 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            Week 4: <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 5 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 5:{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 6 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 6: <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 7 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 7: <ModuleControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 8 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 8: <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 9 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 9: <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 10 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 10: <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 11 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 11:{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>

        {/* Week 12 */}
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /> Week 12:{" "}
            <ModuleControlButtons />
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
              <LessonControlButtons />
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              Overview of syllabus and expectations
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              LECTURE NOTES
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">SLIDES</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              READING
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">TBD</ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
