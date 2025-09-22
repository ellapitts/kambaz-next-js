// This is the Kambaz app layout file in the directory (Kambaz)
// Creates a table element to layout the navigation sidebar and Dashboard into a single row with two columns.
// Puts naviation on the left column and children on the right
import { ReactNode } from "react";
import KambazNavigation from "./Navigation";
export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <table>
      <tbody>
        <tr>
          <td valign="top" width="200">
            {" "}
            <KambazNavigation />{" "}
          </td>
          <td valign="top" width="100%">
            {" "}
            {children}{" "}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
