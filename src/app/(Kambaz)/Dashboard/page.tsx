// This is the dashboard course page
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";

// Redux imports
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { RootState } from "../store";
import { enrollCourse, unenrollCourse } from "./enrollmentsReducer";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: { _id: string; role: string } | null };

  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );

  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-25",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    if (!currentUser) return;
    dispatch(enrollCourse({ userId: currentUser._id, courseId }));
  };

  const handleUnenroll = (courseId: string) => {
    if (!currentUser) return;
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <Button
        variant="primary"
        onClick={() => setShowAllCourses(!showAllCourses)}
        className="float-end"
      >
        {showAllCourses ? "My Courses" : "Enrollments"}
      </Button>
      <hr />

      {currentUser?.role === "FACULTY" && !showAllCourses && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={() => dispatch(updateCourse(course))}
            >
              Update
            </button>
          </h5>
          <hr />
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} (
        {courses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {courses
            .filter((course) => {
              if (showAllCourses) return true;
              if (!currentUser) return false;
              return isEnrolled(course._id);
            })
            .map((course) => (
              <Col key={course._id} style={{ width: "350px" }}>
                <Card>
                  <Link
                    href={`/Courses/${course._id}/Home`}
                    className="text-decoration-none text-dark"
                  >
                    <CardImg
                      src="/images/introtocompsci.jpg"
                      variant="top"
                      height={160}
                    />
                    <CardBody>
                      <CardTitle>{course.name}</CardTitle>
                      <CardText style={{ height: "100px" }}>
                        {course.description}
                      </CardText>
                    </CardBody>
                  </Link>

                  <CardBody className="pt-0">
                    <div className="d-flex justify-content-between">
                      <Button variant="primary">Go</Button>

                      {showAllCourses && currentUser && (
                        isEnrolled(course._id) ? (
                          <Button
                            variant="danger"
                            onClick={(e) => {
                              e.preventDefault();
                              handleUnenroll(course._id);
                            }}
                          >
                            Unenroll
                          </Button>
                        ) : (
                          <Button
                            variant="success"
                            onClick={(e) => {
                              e.preventDefault();
                              handleEnroll(course._id);
                            }}
                          >
                            Enroll
                          </Button>
                        )
                      )}

                      {!showAllCourses && (
                        <>
                          <button
                            className="btn btn-warning me-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(course);
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(deleteCourse(course._id));
                            }}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
}