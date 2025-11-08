
"use client"; // Client-side component
import { addModule, editModule, updateModule, deleteModule } "./reducers";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import { useParams } from "next/navigation"; // Get dynamic route params
import * as db from "../../../Database"; // Import database data (modules, courses, etc.)
import ModuleControls from "./ModuleControls"; // Top-level module actions
import ModuleControlButtons from "./ModuleControlButtons"; // Per-module action buttons
import LessonControlButtons from "./LessonControlButtons"; // Per-lesson action buttons
import { ListGroup, ListGroupItem } from "react-bootstrap"; // Bootstrap list components
import { BsGripVertical } from "react-icons/bs"; // Icon for visual handle

// Added to fix ESLint "any" type warnings.
interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons?: Lesson[];
}
export default function Modules() {
  // Constants 
  const { cid } = useParams(); // Get course ID from URL
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  // Filter modules for this course
  const courseModules = modules.filter((module: Module) => module.course === cid);
  const dispatch = useDispatch();
  
  return (
    <div className="modules-page">
      <ModuleControls /> {/* Top-level controls for all modules */}
      <ListGroup className="rounded-0 mt-4" id="wd-modules">
        {courseModules.map((module: Module) => (
          <div key={module._id} className="module-container mb-3">
            {/* Module header */}
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <span>{module.name}</span>
              </div>
              <ModuleControlButtons /> {/* Buttons for module-level actions */}
            </div>

            {/* Lessons under this module */}
            {module.lessons && module.lessons.length > 0 && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: Lesson) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <span>{lesson.name}</span>
                    </div>
                    <LessonControlButtons /> {/* Buttons for lesson-level actions */}
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </div>
        ))}
      </ListGroup>

      <style jsx>{`
        .modules-page {
          padding: 2rem;
        }
        .module-container {
          border-radius: 0.25rem;
          overflow: hidden;
        }
        .wd-lessons .wd-lesson + .wd-lesson {
          border-top: 1px solid #dee2e6;
        }
      `}</style>
    </div>
  );
}
