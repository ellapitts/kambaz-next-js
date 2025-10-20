// src/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx
"use client";

import { useParams } from "next/navigation";
import * as db from "../../../Database"; // All data: assignments, courses, modules
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(a => a.course === cid); // Filter for this course

  return (
    <div className="assignments-page" style={{ padding: "2rem" }}>
      <h2>Assignments for {cid}</h2>

      <ListGroup className="rounded-0 mt-3">
        {assignments.map((assignment) => (
          <ListGroupItem
            key={assignment._id}
            className="d-flex align-items-center justify-content-between p-3 mb-2"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <span>{assignment.title}</span>
            </div>
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
