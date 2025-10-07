// This is the assignment editor/view detail page
// Content: Assignment name field, description, points field, due date field, submission type (link/file) field etc.
// This is mostly for the Faculty/Professor View. Student does not have this accessibility feature in the future.

// "use client";
// import Link from "next/link";
// import { useParams } from "next/navigation";
// export default function AssignmentEditor() {

//   return (
//     <div id="wd-assignments-editor">
//       <h1>Assignment Editor</h1>
//       <input id="wd-name" defaultValue="Assignment X" />
//       <br />
//       <br />

//       {/* This is the description textbox*/}
//       <textarea
//         id="wd-description"
//         rows={4}
//         cols={50}
//         defaultValue="The assignment is available online. Submit a link to the landing page"
//       />
//       <br />
//       <br />

//       {/* Points */}
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <label htmlFor="wd-points" style={{ marginRight: "10px" }}>
//                 <strong>Points</strong>
//               </label>
//             </td>
//             <td>
//               <input id="wd-points" type="text" defaultValue={100} />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br />

//       {/* Assignment Group Dropdown Menu*/}
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <label htmlFor="wd-group" style={{ marginRight: "10px" }}>
//                 <strong>Assignment Group</strong>
//               </label>
//             </td>
//             <td>
//               <select id="wd-group">
//                 <option value="ASSIGNMENTS">Assignments</option>
//                 <option value="QUIZZES">Quizzes</option>
//                 <option value="EXAMS">Exams</option>
//                 <option value="PROJECT">Projects</option>
//               </select>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br />

//       {/* Display Grade as Dropdown Menu */}
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <label
//                 htmlFor="wd-display-grade-as"
//                 style={{ marginRight: "10px" }}
//               >
//                 <strong>Display Grade as</strong>
//               </label>
//             </td>
//             <td>
//               <select id="wd-display-grade-as">
//                 <option value="Percentage">Percentage</option>
//                 <option value="Letter">Letter Grade</option>
//               </select>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br />

//       {/* Submission Type */}
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <label
//                 htmlFor="wd-submission-type"
//                 style={{ marginRight: "10px" }}
//               >
//                 <strong>Submission Type</strong>
//               </label>
//             </td>
//             <td>
//               <select id="wd-submission-type">
//                 <option value="Online">Online</option>
//                 <option value="Paper">Paper</option>
//                 <option value="External Tool">External Tool</option>
//               </select>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br />
//       {/* Online Entry Options*/}
//       <label>Online Entry Options</label>
//       <br></br>
//       <input type="checkbox" name="check-options" id="wd-chkbox-text-entry" />
//       <label htmlFor="wd-chkbox-comedy">Text Entry</label>
//       <br />
//       <input type="checkbox" name="check-options" id="wd-chkbox-website-url" />
//       <label htmlFor="wd-chkbox-drama">Website URL</label>
//       <br />
//       <input
//         type="checkbox"
//         name="check-options"
//         id="wd-chkbox-media-recordings"
//       />
//       <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
//       <br />
//       <input
//         type="checkbox"
//         name="check-options"
//         id="wd-chkbox-student-annotations"
//       />
//       <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>
//       <br />
//       <input type="checkbox" name="check-genre" id="wd-chkbox-file-uplaods" />
//       <label htmlFor="wd-chkbox-fantasy">File Uplaods</label>
//       <br />

//       {/* Assign to {textbox */}
//       <table>
//         <tbody>
//           <tr>
//             <td>
//               <label htmlFor="wd-assign-to" style={{ marginRight: "10px" }}>
//                 <strong>Assign to: </strong>
//               </label>
//               <br />
//             </td>
//             <td>
//               <input id="wd-points" type="text" defaultValue={100} />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br />

//       {/* Due Date */}
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="wd-due-date">Due Date: </label>
//         <input id="wd-due-date" type="date" defaultValue="2025-10-06" />
//       </div>
//       <br />

//       {/* Available FROM ... UNTIL*/}
//       <table>
//         <tbody>
//           <tr>
//             <td style={{ paddingRight: "20px" }}>
//               <label htmlFor="wd-available-from">
//                 <strong>Available from</strong>
//               </label>
//               <br />
//               <input
//                 id="wd-available-from"
//                 type="date"
//                 defaultValue="2025-10-05"
//               />
//             </td>
//             <td>
//               <label htmlFor="wd-available-until">
//                 <strong>Until</strong>
//               </label>
//               <br />
//               <input
//                 id="wd-available-until"
//                 type="date"
//                 defaultValue="2025-10-06"
//               />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <br />
//       <hr />
//       {/* Save or Cancel Buttons */}
//       <Link href={`/Courses/${cid}/Assignments/${aid}/`}>
//       {/* Takes you to the same page for more edits */}
//         <button style={{ marginRight: "10px" }}>Cancel</button>
//       </Link>
//       <Link href={`/Courses/${cid}/Assignments`}>
//             {/* Takes you to the assignment selector page to edit a different assignment */}
//         <button style={{ backgroundColor: "blue", color: "white" }}>
//           Save
//         </button>
//       </Link>
//     </div>
//   );
// }

// New code for A2
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Form, FormControl, FormLabel, FormSelect, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl 
          id="wd-name" 
          defaultValue="Assignment X" 
          className="mb-3"
        />

        {/* Description */}
        <FormLabel htmlFor="wd-description">Description</FormLabel>
        <FormControl 
          as="textarea"
          id="wd-description"
          rows={4}
          defaultValue="The assignment is available online. Submit a link to the landing page"
          className="mb-3"
        />

        {/* Points */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-points" className="text-end d-block">
              <strong>Points</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl 
              id="wd-points" 
              type="number" 
              defaultValue={100}
            />
          </Col>
        </Row>

        {/* Assignment Group */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-group" className="text-end d-block">
              <strong>Assignment Group</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">Exams</option>
              <option value="PROJECT">Projects</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Display Grade As */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-display-grade-as" className="text-end d-block">
              <strong>Display Grade as</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-display-grade-as" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              <option value="Letter">Letter Grade</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Submission Type */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-submission-type" className="text-end d-block">
              <strong>Submission Type</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <FormSelect id="wd-submission-type" defaultValue="Online" className="mb-3">
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="External Tool">External Tool</option>
              </FormSelect>

              {/* Online Entry Options */}
              <div>
                <strong>Online Entry Options</strong>
                <div className="mt-2">
                  <Form.Check 
                    type="checkbox"
                    id="wd-chkbox-text-entry"
                    label="Text Entry"
                    name="check-options"
                  />
                  <Form.Check 
                    type="checkbox"
                    id="wd-chkbox-website-url"
                    label="Website URL"
                    name="check-options"
                  />
                  <Form.Check 
                    type="checkbox"
                    id="wd-chkbox-media-recordings"
                    label="Media Recordings"
                    name="check-options"
                  />
                  <Form.Check 
                    type="checkbox"
                    id="wd-chkbox-student-annotations"
                    label="Student Annotation"
                    name="check-options"
                  />
                  <Form.Check 
                    type="checkbox"
                    id="wd-chkbox-file-uploads"
                    label="File Uploads"
                    name="check-options"
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Assign Section */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel className="text-end d-block">
              <strong>Assign</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              {/* Assign to */}
              <FormLabel htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </FormLabel>
              <FormControl 
                id="wd-assign-to" 
                defaultValue="Everyone"
                className="mb-3"
              />

              {/* Due Date */}
              <FormLabel htmlFor="wd-due-date" className="fw-bold">
                Due
              </FormLabel>
              <FormControl 
                id="wd-due-date"
                type="date"
                defaultValue="2025-10-06"
                className="mb-3"
              />

              {/* Available From and Until */}
              <Row>
                <Col md={6}>
                  <FormLabel htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </FormLabel>
                  <FormControl 
                    id="wd-available-from"
                    type="date"
                    defaultValue="2025-10-05"
                  />
                </Col>
                <Col md={6}>
                  <FormLabel htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </FormLabel>
                  <FormControl 
                    id="wd-available-until"
                    type="date"
                    defaultValue="2025-10-06"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Action Buttons */}
        <hr />
        <div className="d-flex justify-content-end gap-2">
          <Link href={`/Courses/${cid}/Assignments/${aid}/`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
