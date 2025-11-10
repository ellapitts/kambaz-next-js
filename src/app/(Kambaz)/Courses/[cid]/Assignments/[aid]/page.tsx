"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import { Form, FormControl, FormLabel, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  // Get assignments from Redux
  const assignments = useSelector(
    (state: RootState) => state.assignmentsReducer.assignments
  );

  const isNew = aid === "new";
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  // Local state for form
  const [assignment, setAssignment] = useState<any>({
    _id: "",
    title: "",
    description: "",
    points: 100,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid as string,
  });

  // Load existing assignment data when editing
  useEffect(() => {
    if (existingAssignment) {
      setAssignment(existingAssignment);
    }
  }, [existingAssignment]);

  // Save handler
  const handleSave = () => {
    if (isNew) {
      dispatch(addAssignment(assignment));
    } else {
      dispatch(updateAssignment(assignment));
    }
    router.push(`/Courses/${cid}/Assignments`);
  };

  // Cancel handler
  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h3>{isNew ? "New Assignment" : "Edit Assignment"}</h3>
      <Form>
        {/* Assignment Name */}
        <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
        <FormControl
          id="wd-name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="mb-3"
        />

        {/* Description */}
        <FormLabel htmlFor="wd-description">Description</FormLabel>
        <FormControl
          as="textarea"
          id="wd-description"
          rows={4}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
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
              value={assignment.points}
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
            />
          </Col>
        </Row>

        {/* Due Date */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-due-date" className="text-end d-block">
              <strong>Due Date</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl
              id="wd-due-date"
              type="date"
              value={assignment.dueDate}
              onChange={(e) =>
                setAssignment({ ...assignment, dueDate: e.target.value })
              }
            />
          </Col>
        </Row>

        {/* Available From */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-available-from" className="text-end d-block">
              <strong>Available from</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl
              id="wd-available-from"
              type="date"
              value={assignment.availableFrom}
              onChange={(e) =>
                setAssignment({ ...assignment, availableFrom: e.target.value })
              }
            />
          </Col>
        </Row>

        {/* Available Until */}
        <Row className="mb-3">
          <Col md={3}>
            <FormLabel htmlFor="wd-available-until" className="text-end d-block">
              <strong>Until</strong>
            </FormLabel>
          </Col>
          <Col md={9}>
            <FormControl
              id="wd-available-until"
              type="date"
              value={assignment.availableUntil}
              onChange={(e) =>
                setAssignment({ ...assignment, availableUntil: e.target.value })
              }
            />
          </Col>
        </Row>

        {/* Action Buttons */}
        <hr />
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}