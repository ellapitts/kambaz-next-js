// This is the assignment editor/view detail page
// Content: Assignment name field, description, points field, due date field, submission type (link/file) field etc.
// This is mostly for the Faculty/Professor View. Student does not have this accessibility feature in the future.

// export default async function AssignmentEditor({
//   params,
// }: {
//   params: Promise<{ cid: string; aid: string }>;
// }) {
//   const { cid, aid } = await params;

//   return (
//     <div id="wd-assignments-editor">
//       <h1>Assignments</h1>
//       <input id="wd-name" defaultValue="A1" />
//       <br />
//       <br />

//       <textarea
//         id="wd-description"
//         rows={4}
//         cols={50}
//         defaultValue="The assignment is available online. Submit a link to the landing page"
//       />
//       <br />
//       <br />
//       <div style={{ marginBottom: "10px" }}>
//         <label htmlFor="wd-due-date">Due Date: </label>
//         <input id="wd-due-date" type="date" defaultValue="2023-10-10" />
//       </div>
//       <table>
//         <div>
//           <label htmlFor="wd-points" style={{ marginRight: "10px" }}>
//             <strong>Points</strong>
//           </label>
//           <input id="wd-points" type="Letter" defaultValue={100} />
//         </div>
//       </table>
//     </div>
//   );
// }

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
1g. Online entry options: checlboxes;
- text entry
- website URL
- Media recordings
- student annotation
- file uplaods

Assign: Assign to ____ (textbox)

Due date: Calendar

Available from: Date (calendar) 
Until: Date (calendar)

Cancel Button;  Save button 
*/ 

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h1>Assignments</h1>
      <input id="wd-name" defaultValue="A1" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={4}
        cols={50}
        defaultValue="The assignment is available online. Submit a link to the landing page"
      />
      <br />
      <br />
      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="wd-due-date">Due Date: </label>
        <input id="wd-due-date" type="date" defaultValue="2023-10-10" />
      </div>

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

      {/* <table>
        <div>
          <label htmlFor="wd-points" style={{ marginRight: "10px" }}>
            <strong>Points</strong>
          </label>
          <input id="wd-points" type="Letter" defaultValue={100} />
        </div>
      </table> */}
    </div>
  );
}