// Dashboard page: displas all courses and allows users to enroll, unenroll, or manage the state.
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as client from "../Courses/client";
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
import {
  // addNewCourse, removed 
  // deleteCourse, removed 
  //updateCourse,
  setCourses,
} from "../Courses/reducer";
import { RootState } from "../store";
import { enrollCourse, unenrollCourse } from "./enrollmentsReducer";

export default function Dashboard() {
  // Grab all courses from Redux
  const { courses } = useSelector((state: RootState) => state.coursesReducer);

  // Get current signed-in user from Redux
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: { _id: string; role: string } | null };

  // get all enrollments from Redux
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentsReducer
  );

  // Dispatch function -- trigger Redux
  const dispatch = useDispatch();

  // Tracks whether to show all or ust user's enrollment
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Faculty only - template for creating new courses
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-25",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  // Fetch course
  const fetchCourses = async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };

  // Add new course
  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };
  useEffect(() => {
    fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  // Delete existing course
    const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  // Update course
    const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c) => {
        if (c._id === course._id) { return course; }
        else { return c; }
    })));};


  // Helper funct. check if user is enrolled in spec. course.
  const isEnrolled = (courseId: string) => {
    return enrollments.some(
      (e: any) => e.user === currentUser?._id && e.course === courseId
    );
  };

  // Unenroll helper funct for currentUser from course
  const unenroll = (courseId: string) => {
    if (!currentUser) return;
    dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      {/* BLUE Enrollment toggel button.
      Switches between User's Courses and ALL COURSES */}

      <Button
        variant="primary"
        onClick={() => setShowAllCourses(!showAllCourses)}
      >
        {showAllCourses ? "My Courses" : "Enrollments"}
      </Button>
      <hr />

      {/* FACULTY SECTION: Only visible to faculty users when showing "My Courses" */}
      {currentUser?.role === "FACULTY" && !showAllCourses && (
        <>
          <h5>
            New Course
            <button
              id="wd-add-new-course-click"
              className="btn btn-primary float-end"
              onClick={onAddNewCourse}
            >
              Add
            </button>
            {/* Update existing course */}
            <button
              id="wd-update-new-course-click"
              onClick={onUpdateCourse}
              className="btn btn-warning float-end me-2"
            >
              Update
            </button>
          </h5>
          <hr />
          <br />

          {/* Text input for editing course name */}
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />

          {/* Text area for editing course description */}
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

      {/* Header updates dynamically based on the view */}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} ({courses.length}
        )
      </h2>
      <hr />

      {/* Courses grid */}
      <div id="wd-dashboard-courses">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {/* Loop and filter through courses depending on mode of user */}
          {courses.map((course) => (
            <Col key={course._id} style={{ width: "350px" }}>
              <Card>
                {/* Course image, title, and description link */}
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
                {/* Action button area under each course card */}
                <CardBody className="pt-0">
                  <div className="d-flex justify-content-between">
                    {/* Shows GO button */}
                    <Button variant="primary">Go</Button>
                    {/* ENROLL / UNENROLL BUTTONS */}
                    {showAllCourses &&
                      currentUser &&
                      (isEnrolled(course._id) ? (
                        // If user is already enrolled - show red Unenroll
                        <Button
                          variant="danger"
                          onClick={(e) => {
                            e.preventDefault();
                            unenroll(course._id);
                          }}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        // if user NOT ENROLLED,show green enroll
                        <Button
                          variant="success"
                          onClick={(e) => {
                            e.preventDefault();
                            ((courseId: string) => {
                              if (!currentUser) return;
                              dispatch(
                                enrollCourse({
                                  userId: currentUser._id,
                                  courseId,
                                })
                              );
                            })(course._id);
                          }}
                        >
                          Enroll
                        </Button>
                      ))}

                    {/* Faculty-only Edit/Delete buttons */}
                    {!showAllCourses && (
                      <>
                        {/* Edit course */}
                        <button
                          className="btn btn-warning me-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setCourse(course);
                          }}
                        >
                          Edit
                        </button>

                        {/* Delete course */}
                        <button
                          className="btn btn-danger"
                          onClick={(e) => {
                            e.preventDefault();
                            onDeleteCourse(course._id);
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
