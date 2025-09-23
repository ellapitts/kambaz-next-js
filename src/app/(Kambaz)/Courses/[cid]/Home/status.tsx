export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-publish-all">
        <option value="">✓ Publish All</option>
        <option value="publish-modules">Publish All Modules and Items</option>
        <option value="publish-modules-only">Publish Modules Only</option>
        <option value="unpublish-all">Unpublish All</option>
      </select>

      <button>Unpublish</button>
      <button>Publish</button>
      <button>Import Existing Content</button>
      <button>Choose Home Page</button>
      <button>View Course Stream</button>
      <button>New Annoucements</button>
      <button>View Course Notfifications</button>
      <button>New Analytics</button>
    </div>
  );
}
