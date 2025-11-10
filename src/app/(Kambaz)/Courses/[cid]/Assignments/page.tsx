// src/app/(Kambaz)/Courses/[cid]/Assignments/page.tsx
"use client";

// import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import AssignmentControls from "./AssignmentControls";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical, BsThreeDotsVertical } from "react-icons/bs";
import { deleteAssignment } from "./reducer";
import { FaPlus, FaPencil, FaTrash } from "react-icons/fa6";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  // Get assignments from Redux store inside the actual array
  const assignments = useSelector(
    (state: RootState) => state.assignmentsReducer.assignments
  );

  // Filter array for this course
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );

  if (!courseAssignments.length) {
    return <div>No assignments found for this course.</div>;
  }

  // Delete assignment function
  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?"))
      // Dispatch delete action
      dispatch(deleteAssignment(assignmentId));
  };

  return (
    <div className="assignments-page p-3">
      {/* Top Controls Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search Bar - Left Side */}
        <div style={{ width: "300px" }}>
          <input
            className="form-control"
            placeholder="Search for Assignment"
            type="text"
          />
        </div>

        {/* Buttons - Right Side */}
        <div className="d-flex gap-2">
          {/* + Group Button */}
          <Button variant="secondary" size="lg">
            <FaPlus className="me-2" />
            Group
          </Button>

          {/* +  Assignment Button (Red) with modal */}
          <AssignmentControls />
          {/* assignmentName={assignmentName}
          setAssignmentName={setAssignmentName}
           addAssignment={handleAddAssignment} /*}
        
        {/* Elipsees (An Aesthetic for now)... No functionality for now */}
          <Button variant="outline-secondary" size="sm">
            <BsThreeDotsVertical />
          </Button>
        </div>
      </div>

      {/* No assignments message */}
      {courseAssignments.length === 0 && (
        <div className="alert alert-info">
          No assignments yet. Click {"+ Assignment"} to add one!
        </div>
      )}

      {/* Assignment List */}
      <ListGroup className="rounded-0">
        {courseAssignments.map((assignment: any) => (
          <ListGroupItem
            key={assignment._id}
            className="d-flex align-items-center justify-content-between p-3"
          >
            <div className="d-flex align items-center flex-grow-1">
              <BsGripVertical className="me-3 fs-3" />
            </div>
            <a
              className="fw-bold text-decoration-none text-dark"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                router.push(`/Courses/${cid}/Assignments/${assignment._id}`);
              }}
            >
              {assignment.title}
            </a>

            <div className="text-muted small">
              {assignment.description && (
                <span>{assignment.description} | </span>
              )}
              {assignment.dueDate && <span>Due: {assignment.dueDate} | </span>}
              {assignment.points && <span>{assignment.points} pts</span>}
            </div>

            <div className="d-flex gap-2">
              <FaPencil
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  router.push(`/Courses/${cid}/Assignments/${assignment._id}`)
                }
              />
              <FaTrash
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => handleDelete(assignment._id)}
              />
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
