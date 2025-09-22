// This is the assignment editor/view detail page
// Content: Assignment name field, description, points field, due date field, submission type (link/file) field etc.
// This is mostly for the Faculty/Professor View. Student does not have this accessibility feature in the future.

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <h2>Assignments</h2>
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue="The assignment is available online Submit a link to the landing page"
      />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        {/* Complete on your own */}
      </table>
    </div>
  );
}
