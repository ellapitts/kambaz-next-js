// This page lists all the assignments for the course
// Content is search bar, add assignment / group buttons, lists the various assignments' anchors
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
export default function Assignments() {
  const { cid } = useParams(); // Placeholder for course ID, replace with actual data fetching logic

  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href={"/Courses/${cid}/Assignments/123"}
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href={"/Courses/${cid}/Assignments/124"}
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
        </li>
      </ul>
    </div>
  );
}
