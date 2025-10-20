// src/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx
"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";

export default function Assignments() {
  const { cid } = useParams();
  const courseAssignments = db.assignments.filter(a => a.course === cid);

  if (!courseAssignments.length) {
    return <div>No assignments found for this course.</div>
  }

  return (
    <div className="assignments-page" style={{ padding: "2rem" }}>
      <h2>Assignments for {cid}</h2>

      <ListGroup className="rounded-0 mt-3">
        {courseAssignments.map((assignment) => (
          <ListGroupItem
            key={assignment._id}
            className="d-flex align-items-center justify-content-between p-3 mb-2"
            style={{ cursor: "pointer" }}
          >
            <Link 
              href={`/Courses/${cid}/Assignments/${assignment._id}`} 
              className="text-decoration-none"
            >
              {assignment.title}
            </Link>
          </ListGroupItem>
        ))}
      </ListGroup>

      <style jsx>{`
        .assignments-page h2 {
          margin-bottom: 1rem;
        }
        .assignments-page .list-group-item:hover {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
}