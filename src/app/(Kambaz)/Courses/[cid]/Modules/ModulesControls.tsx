"use client";
import ModuleEditor from "./ModuleEditor";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-module-controls" className="text-nowrap">
      {/* Add Module Button  (+ Red button) - Opens Modal */}
      <Button variant="btn btn-danger" onClick={handleShow}>
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      {/* Publish All Dropdown Menu */}
      <Dropdown className="float-end me-2">
        <DropdownToggle variant="secondary" size="lg">
          <GreenCheckmark /> Publish All
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <GreenCheckmark /> Publish All Modules
          </DropdownItem>
          <DropdownItem>
            <GreenCheckmark /> Publish modules only
          </DropdownItem>
          <DropdownItem>Unpublished all modules</DropdownItem>
          <DropdownItem>Unpublish modules only</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      {/* View Progress Button */}
      <Button variant="secondary" size="lg" className="float-end me-1">
        View Progress
      </Button>
      {/* Collapse All  Button  */}
      <Button variant="secondary" size="lg" className="float-end me-1">
        Collapse All
      </Button>

      {/* Module Editor Modal (the popup window) */}
      <ModuleEditor
        show={show} // Controls popup visibility
        handleClose={handleClose} // Funtion to close popup
        dialogTitle="Add Module" // Title of the popup
        moduleName={moduleName} // Content being typed in the input
        setModuleName={setModuleName} // Updates what is being typed
        addModule={addModule} // Save new module being added
      />
    </div>
  );
}
