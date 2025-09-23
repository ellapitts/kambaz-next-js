// Presereve the Kambaz navigatuion and layout for all courses pages.
import { ReactNode } from "react";
import CourseNavigation from "./MyNavigation";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      {/* Implement Collapse All button, View Progress button, etc. */}
      <h2>Courses {cid}</h2>
      <hr />
      <div id="wd-course-controls" style={{ marginBottom: "20px" }}>
        <button id="wd-collapse-all">Collapse All</button>{" "}
        <button id="wd-view-progress">View Progress</button>{" "}
        <select id="wd-publish-all" defaultValue="">
          <option value="" disabled>
            Publish All
          </option>
          <option value="publish-modules">Publish All Modules as Draft</option>
          <option value="publish-items">Publish All Items for Review</option>
          <option value="unpublish-all">Unpublish</option>
        </select>{" "}
        <button id="wd-add-module">+ Module Changes</button>
      </div>

      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
