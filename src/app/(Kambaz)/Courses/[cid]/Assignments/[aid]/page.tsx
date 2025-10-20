"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../../Database"; // All data: assignments, courses, modules
import { Form, FormControl, FormLabel, FormSelect, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = db.assignments.find(a => a._id === aid);

  if (!assignment) {
    return <div>Error: Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl 
          id="wd-name" 
          defaultValue={assignment.title} 
          className="mb-3"
        />

        {/* Description */}
        <FormLabel htmlFor="wd-description">Description</FormLabel>
        <FormControl 
          as="textarea"
          id="wd-description"
          rows={4}
          defaultValue={assignment.description || ""}
          className="mb-3"
        />

        {/* Points */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-points" className="text-end d-block">
              <strong>Points</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl 
              id="wd-points" 
              type="number" 
              defaultValue={assignment.points || 0}
            />
          </Col>
        </Row>

        {/* Assignment Group */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-group" className="text-end d-block">
              <strong>Assignment Group</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-group" defaultValue={assignment.group || "ASSIGNMENTS"}>
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">Exams</option>
              <option value="PROJECT">Projects</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Display Grade As */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-display-grade-as" className="text-end d-block">
              <strong>Display Grade as</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormSelect id="wd-display-grade-as" defaultValue={assignment.gradeDisplay || "Percentage"}>
              <option value="Percentage">Percentage</option>
              <option value="Letter">Letter Grade</option>
            </FormSelect>
          </Col>
        </Row>

        {/* Submission Type */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-submission-type" className="text-end d-block">
              <strong>Submission Type</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <FormSelect 
                id="wd-submission-type" 
                defaultValue={assignment.submissionType || "Online"} 
                className="mb-3"
              >
                <option value="Online">Online</option>
                <option value="Paper">Paper</option>
                <option value="External Tool">External Tool</option>
              </FormSelect>

              {/* Online Entry Options */}
              {assignment.submissionType === "Online" && (
                <div>
                  <strong>Online Entry Options</strong>
                  <div className="mt-2">
                    {["Text Entry", "Website URL", "Media Recordings", "Student Annotation", "File Uploads"].map(option => (
                      <Form.Check
                        key={option}
                        type="checkbox"
                        label={option}
                        defaultChecked={assignment.onlineOptions?.includes(option) || false}
                        className="mb-1"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>

        {/* Assign Section */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel className="text-end d-block">
              <strong>Assign</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <FormLabel htmlFor="wd-assign-to" className="fw-bold">
                Assign to
              </FormLabel>
              <FormControl 
                id="wd-assign-to" 
                defaultValue={assignment.assignTo || "Everyone"}
                className="mb-3"
              />

              {/* Due Date */}
              <FormLabel htmlFor="wd-due-date" className="fw-bold">
                Due
              </FormLabel>
              <FormControl 
                id="wd-due-date"
                type="date"
                defaultValue={assignment.dueDate || ""}
                className="mb-3"
              />

              {/* Available From and Until */}
              <Row>
                <Col md={6}>
                  <FormLabel htmlFor="wd-available-from" className="fw-bold">
                    Available from
                  </FormLabel>
                  <FormControl 
                    id="wd-available-from"
                    type="date"
                    defaultValue={assignment.availableFrom || ""}
                  />
                </Col>
                <Col md={6}>
                  <FormLabel htmlFor="wd-available-until" className="fw-bold">
                    Until
                  </FormLabel>
                  <FormControl 
                    id="wd-available-until"
                    type="date"
                    defaultValue={assignment.availableUntil || ""}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        {/* Action Buttons */}
        <hr />
        <div className="d-flex justify-content-end gap-2">
          <Link href={`/Courses/${cid}/Assignments/${aid}/`}>
            <Button variant="secondary">Cancel</Button>
          </Link>
          <Link href={`/Courses/${cid}/Assignments`}>
            <Button variant="danger">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}