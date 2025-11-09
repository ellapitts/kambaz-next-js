// Modules page for a specific course
"use client"; 
import { useState } from "react"; // React state management
import { useParams } from "next/navigation"; // Get dynamic route params

// redux imports 
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";

import ModulesControls from "./ModulesControls"; // Top-level module actions
import ModuleControlButtons from "./ModuleControlButtons"; // Per-module action buttons
import LessonControlButtons from "./LessonControlButtons"; // Per-lesson action buttons
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap"; // Bootstrap list components
import { BsGripVertical } from "react-icons/bs"; // Icon for visual handle


export default function Modules() {
  const { cid } = useParams(); // Get course ID from URL
  const [moduleName, setModuleName] = useState("")
  
  // Get modules from Redux 
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch(); // get dispatch to call reducer function 
  const courseModules = modules.filter((module: any) => module.course === cid); // filters modules for this course

  // // Add new module 
  // const addModule = () => {
  //   setModules([...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] }]);
  //   setModuleName("");
  // };

  // // Delete module by ID
  // const deleteModule = (moduleId: string) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };

  // // Edit module name by ID
  // // sets module editing state to true to show input field
  // const editModule = (moduleId: string) => {
  //   setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  // }; 

  // Update module name
  // updates any fields of a module 
  //   const updateModule = (module: any) => {
  //     setModules(modules.map((m) => (m._id === module._id ? module : m)));
  // };

  return (
    <div className="modules-page">
      <ModulesControls 
      setModuleName={setModuleName} 
      moduleName={moduleName} 
      addModule={() => {
        dispatch(addModule({ name: moduleName, course: cid }));
        setModuleName("");
      }} />

      <ListGroup className="rounded-0 mt-4" id="wd-modules">
        {courseModules.map((module: any) => (
          <div key={module._id} className="module-container mb-3">
            
            {/* Module header */}
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />

                {/* show name if not editing*/}
                {!module.editing && module.name} 
                {/* show input field if editing when typing edit the mod. name */}
                { module.editing && ( 
                  <FormControl className="w-50 d-inline-block" /* if <Enter> key pressed, then set editing field to false so we hide text field */ 
                  onChange={(e) => dispatch(
                    updateModule({ ...module, name: e.target.value }))
              }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(
                      updateModule({ ...module, editing: false }));
                    }
                  }}
                  defaultValue={module.name} />
              )}
              </div>
              
              {/* Buttons for module-level actions */}
              <ModuleControlButtons 
              moduleId={module._id}
              deleteModule={(moduleId) => dispatch(deleteModule(moduleId))}
              editModule={(moduleId) => dispatch(editModule(moduleId))}
              /> 
            </div>

            {/* Lessons under this module */}
            {module.lessons && module.lessons.length > 0 && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1 d-flex align-items-center justify-content-between"
                  >
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <span>{lesson.name}</span>
                    </div>
                    <LessonControlButtons />
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