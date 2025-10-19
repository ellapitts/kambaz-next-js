// This is the dashboard course page
"use client";
import Link from "next/link";
import * as db from "../Database";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  const courses = db.courses; // This pulls from the sample database provided in Prof. Jose Annunziato's Course Repo.  

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {courses.map((course) => (
            <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link href={`/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                  <CardImg src="/images/introtocompsci.jpg" variant="top" height={160} />
                  <CardBody className="card-body">
                    <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                     {course.name} </CardTitle>
                     <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}</CardText>
                      <Button variant="primary">Go</Button>
                      </CardBody>
                      </Link></Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}