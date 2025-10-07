// This is the assignment editor/view detail page
// Content: Assignment name field, description, points field, due date field, submission type (link/file) field etc.
// This is mostly for the Faculty/Professor View. Student does not have this accessibility feature in the future.

// Assignment page editor
// [cid]/Assignments/[aid]/editor.tsx

/* Should look like the following

1. assignment editor heading: Assignment Name"
1a. textbox to give assignment a name
1b. Assignment description and details text box
1c. Points: textbook numbers
1d. Assignment Group: Drop down 
1e. Display Grade: Drop down (percentage, number, or letter)
1f. Submission Type: Drop down 

Assign: Assign to ____ (textbox)

Due date: Calendar

Available from: Date (calendar) 
Until: Date (calendar)

Cancel Button;  Save button 
*/

"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();

  return (
    <div id="wd-assignments-editor">
      <h1>Assignment Editor</h1>
      <input id="wd-name" defaultValue="Assignment X" />
      <br />
      <br />

      {/* This is the description textbox*/}
      <textarea
        id="wd-description"
        rows={4}
        cols={50}
        defaultValue="The assignment is available online. Submit a link to the landing page"
      />
      <br />
      <br />

      {/* Points */}
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-points" style={{ marginRight: "10px" }}>
                <strong>Points</strong>
              </label>
            </td>
            <td>
              <input id="wd-points" type="text" defaultValue={100} />
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      {/* Assignment Group Dropdown Menu*/}
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-group" style={{ marginRight: "10px" }}>
                <strong>Assignment Group</strong>
              </label>
            </td>
            <td>
              <select id="wd-group">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="QUIZZES">Quizzes</option>
                <option value="EXAMS">Exams</option>
                <option value="PROJECT">Projects</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      {/* Display Grade as Dropdown Menu */}
      <table>
        <tbody>
          <tr>
            <td>
              <label
                htmlFor="wd-display-grade-as"
                style={{ marginRight: "10px" }}
              >
                <strong>Display Grade as</strong>
              </label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
                <option value="Letter">Letter Grade</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      {/* Submission Type */}
      <table>
        <tbody>
          <tr>
            <td>
              <label
                htmlFor="wd-submission-type"
                style={{ marginRight: "10px" }}
              >
                <strong>Submission Type</strong>
              </label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="External Tool">External Tool</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      {/* Online Entry Options*/}
      <label>Online Entry Options</label>
      <br></br>
      <input type="checkbox" name="check-options" id="wd-chkbox-text-entry" />
      <label htmlFor="wd-chkbox-comedy">Text Entry</label>
      <br />
      <input type="checkbox" name="check-options" id="wd-chkbox-website-url" />
      <label htmlFor="wd-chkbox-drama">Website URL</label>
      <br />
      <input
        type="checkbox"
        name="check-options"
        id="wd-chkbox-media-recordings"
      />
      <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
      <br />
      <input
        type="checkbox"
        name="check-options"
        id="wd-chkbox-student-annotations"
      />
      <label htmlFor="wd-chkbox-fantasy">Student Annotation</label>
      <br />
      <input type="checkbox" name="check-genre" id="wd-chkbox-file-uplaods" />
      <label htmlFor="wd-chkbox-fantasy">File Uplaods</label>
      <br />

      {/* Assign to {textbox */}
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="wd-assign-to" style={{ marginRight: "10px" }}>
                <strong>Assign to: </strong>
              </label>
              <br />
            </td>
            <td>
              <input id="wd-points" type="text" defaultValue={100} />
            </td>
          </tr>
        </tbody>
      </table>
      <br />

      {/* Due Date */}
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="wd-due-date">Due Date: </label>
        <input id="wd-due-date" type="date" defaultValue="2025-10-06" />
      </div>
      <br />

      {/* Available FROM ... UNTIL*/}
      <table>
        <tbody>
          <tr>
            <td style={{ paddingRight: "20px" }}>
              <label htmlFor="wd-available-from">
                <strong>Available from</strong>
              </label>
              <br />
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2025-10-05"
              />
            </td>
            <td>
              <label htmlFor="wd-available-until">
                <strong>Until</strong>
              </label>
              <br />
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2025-10-06"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      {/* Save or Cancel Buttons */}
      <Link href={`/Courses/${cid}/Assignments/${aid}/`}>
      {/* Takes you to the same page for more edits */}
        <button style={{ marginRight: "10px" }}>Cancel</button>
      </Link>
      <Link href={`/Courses/${cid}/Assignments`}>
            {/* Takes you to the assignment selector page to edit a different assignment */}
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Save
        </button>
      </Link>
    </div>
  );
}
