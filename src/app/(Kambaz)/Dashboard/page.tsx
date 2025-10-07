// This is the dashboard nav. course page
// import Link from "next/link";
// import Image from "next/image";
// import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from "react-bootstrap";

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={2} lg={3} xl={4} className="g-4"
//         /* Course 1 */
//           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//             <Card>
//           <Link href="/Courses/101" className="wd-dashboard-course-link text-decoration-none text-dark">
//             <CardImg variant="top" src="/images/introtocompsci.jpg" height={200} />
//               <CardBody>
//                 <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                     CS101 Intro to Computer Science
//                   </CardTitle>
//                   <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                     An introduction to the fundamental concepts of computer science
//                     and programming languages.
//                   </CardText>
//                   <Button variant="primary">Go</Button>
//                 </CardBody>
//               </Link>
//             </Card>
//           </Col>

//             {/* Dashboard Title
//             <div>
//               {" "}
//               {/* Published Courses */}
//               {/* <h3> CS101 Intro to Computer Science </h3>
//               <p className="wd-dashboard-course-title">
//                 An introduction to the fundamental concepts of computer science
//                 and programming languages.
//               </p>
//               <button> Go </button>
//             </CardBody>
//           </Link>
//            </Card>
//         </Col> */}

//         {/* Course 2 */}
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/102" className="wd-dashboard-course-link">
//             <Image
//               src="/images/discretemath.jpg"
//               width={400}
//               height={200}
//               alt="Discrete Structures"
//             />
//             <div>
//               <h3> CS102 Data Structures </h3>
//               <p className="wd-dashboard-course-title">
//                 An exploration into discrete mathematical structures and their
//                 applications in computer science.
//               </p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>

//         {/* Course 3 */}
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/103" className="wd-dashboard-course-link">
//             <Image
//               src="/images/datastructures.jpg"
//               width={400}
//               height={200}
//               alt="Intro Data Structures"
//             />
//             <div>
//               <h3> CS103 Data Structures </h3>
//               <p className="wd-dashboard-course-title">
//                 An overview of fundamental data structures such as arrays,
//                 linked lists, and more data structures in computer science using
//                 Python.
//               </p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>

//         {/* Course 4*/}
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/104" className="wd-dashboard-course-link">
//             <Image
//               src="/images/chatgpt.jpg"
//               width={400}
//               height={200}
//               alt="Machine Learning"
//             />
//             <div>
//               <h3> CS104 Machine Learning </h3>
//               <p className="wd-dashboard-course-title">
//                 Machine Learning and Data Science course.
//               </p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>

//         {/* Course 5*/}
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/105" className="wd-dashboard-course-link">
//             <Image
//               src="/images/businessandai.jpg"
//               width={400}
//               height={200}
//               alt="AI and Business Intersection"
//             />
//             <div>
//               <h3> CS105 AI and Business</h3>
//               <p className="wd-dashboard-course-title">
//                 An overlook of how artificial intelligence is transforming
//                 business operations, decision-making, and customer experiences
//                 across various industries.
//               </p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>

//         {/* Course 6*/}
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/106" className="wd-dashboard-course-link">
//             <Image
//               src="/images/cloud.jpg"
//               width={400}
//               height={200}
//               alt="Intro to cloud computing course"
//             />
//             <div>
//               <h3> CS106 Intro to Cloud Computing </h3>
//               <p className="wd-dashboard-course-title">
//                 Cloud Computing introduction and overview.
//               </p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>

//         {/* Course 7*/}
//         <div className="wd-dashboard-course">
//           <Link href="/Courses/150" className="wd-dashboard-course-link">
//             <Image
//               src="/images/northeasterncoop.jpg"
//               width={400}
//               height={200}
//               alt="Co-op preparation course"
//             />
//             <div>
//               <h3> CO150 Co-op Preparation Course </h3>
//               <p className="wd-dashboard-course-title">
//                 A course designed to prepare students for co-op placements,
//                 covering resume writing, interview skills, workplace etiquette,
//                 and professional development.
//               </p>
//               <button> Go </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Row, Col } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {/* Course 1 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/101" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/introtocompsci.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS101 Intro to Computer Science
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    An introduction to the fundamental concepts of computer science
                    and programming languages.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 2 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/102" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/discretemath.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS102 Discrete Math
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    An exploration into discrete mathematical structures and their
                    applications in computer science.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 3 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/103" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/datastructures.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS103 Data Structures
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    An overview of fundamental data structures such as arrays,
                    linked lists, and more data structures in computer science using Python.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 4 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/104" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/chatgpt.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS104 Machine Learning
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Machine Learning and Data Science course.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 5 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/105" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/businessandai.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS105 AI and Business
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    An overlook of how artificial intelligence is transforming
                    business operations, decision-making, and customer experiences.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 6 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/106" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/cloud.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CS106 Intro to Cloud Computing
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    Cloud Computing introduction and overview.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>

          {/* Course 7 */}
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
              <Link href="/Courses/150" className="wd-dashboard-course-link text-decoration-none text-dark">
                <CardImg variant="top" src="/images/northeasterncoop.jpg" height={160} />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    CO150 Co-op Preparation
                  </CardTitle>
                  <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    A course designed to prepare students for co-op placements,
                    covering resume writing, interview skills, and professional development.
                  </CardText>
                  <Button variant="primary">Go</Button>
                </CardBody>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}