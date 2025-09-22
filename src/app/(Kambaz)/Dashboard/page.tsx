// This is the dashboard nav. course page
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/101" className="wd-dashboard-course-link">
            <Image
              src="/images/introtocompsci.jpg"
              width={400}
              height={200}
              alt="Intro to Computer Science Course"
            />{" "}
            {/* Dashboard Title */}
            <div>
              {" "}
              {/* Published Courses */}
              <h5> CS101 Intro to Computer Science </h5>
              <p className="wd-dashboard-course-title">
                An introduction to the fundamental concepts of computer science
                and programming languages.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/102" className="wd-dashboard-course-link">
            <Image
              src="/images/discretemath.jpg"
              width={400}
              height={200}
              alt="Discrete Structures"
            />
            <div>
              <h5> CS102 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                An exploration into discrete mathematical structures and their
                applications in computer science.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/103" className="wd-dashboard-course-link">
            <Image
              src="/images/datastructures.jpg"
              width={400}
              height={200}
              alt="Intro Data Structures"
            />
            <div>
              <h5> CS103 Data Structures </h5>
              <p className="wd-dashboard-course-title">
                An overview of fundamental data structures such as arrays,
                linked lists, and more data structures in computer science using
                Python.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 4*/}
        <div className="wd-dashboard-course">
          <Link href="/Courses/104" className="wd-dashboard-course-link">
            <Image
              src="/images/chatgpt.jpg"
              width={400}
              height={200}
              alt="Machine Learning"
            />
            <div>
              <h5> CS104 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning and Data Science course.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 5*/}
        <div className="wd-dashboard-course">
          <Link href="/Courses/105" className="wd-dashboard-course-link">
            <Image
              src="/images/businessandai.jpg"
              width={400}
              height={200}
              alt="AI and Business Intersection"
            />
            <div>
              <h5> CS105 AI and Business</h5>
              <p className="wd-dashboard-course-title">
                An overlook of how artificial intelligence is transforming
                business operations, decision-making, and customer experiences
                across various industries.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 6*/}
        <div className="wd-dashboard-course">
          <Link href="/Courses/106" className="wd-dashboard-course-link">
            <Image
              src="/images/cloud.jpg"
              width={400}
              height={200}
              alt="Intro to cloud computing course"
            />
            <div>
              <h5> CS106 Intro to Cloud Computing </h5>
              <p className="wd-dashboard-course-title">
                Cloud Computing introduction and overview.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Course 7*/}
        <div className="wd-dashboard-course">
          <Link href="/Courses/150" className="wd-dashboard-course-link">
            <Image
              src="/images/northeasterncoop.jpg"
              width={400}
              height={200}
              alt="Co-op preparation course"
            />
            <div>
              <h5> CO150 Co-op Preparation Course </h5>
              <p className="wd-dashboard-course-title">
                A course designed to prepare students for co-op placements,
                covering resume writing, interview skills, workplace etiquette,
                and professional development.
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
