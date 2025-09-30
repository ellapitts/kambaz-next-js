// src/app/(Kambaz)/kambaz-homepage-layout.tsx file
/* Should be responsisble for the layout of the main Kambaz navigation sidebar:
- contains NEU page, Account, Dashboard, Courses, Calendar, Inbox, Labs
*/

import { ReactNode } from "react";
import KambazNavigation from "./kambaz-homepage-navigation";

export default function KambazLayout({children,}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz">
      <table>
      <tbody>
          <tr>
            <td valign="top" width="200"><KambazNavigation /></td>
            <td valign="top" width="100%">{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}