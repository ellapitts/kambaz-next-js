// This page lists all the assignments for the course
// Content is search bar, add assignment / group buttons, lists the various assignments' anchors
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
export default function Assignments() {
  const { cid } = useParams(); // Course ID from url

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
            href={"/Courses/${cid}/Assignments/A1"}
            className="wd-assignment-link"
          >
            A1
          </Link>
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href={"/Courses/${cid}/Assignments/A2"}
            className="wd-assignment-link"
          >
            A2
          </Link>
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href={"/Courses/${cid}/Assignments/A3"}
            className="wd-assignment-link"
          >
            A3
          </Link>
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href={"/Courses/${cid}/Assignments/A4"}
            className="wd-assignment-link"
          >
            A4
          </Link>
        </li>
      </ul>
    </div>
  );
}
