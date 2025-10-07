import { Button, Form, InputGroup } from "react-bootstrap";
import { FaPlus, FaSearch } from "react-icons/fa";

export default function AssignmentControls() {
  return (
    <div id="wd-assignments-controls" className="text-nowrap">
      <Button 
        variant="danger" 
        size="lg" 
        className="me-1 float-end"
        id="wd-add-assignment-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>
      
      <Button 
        variant="secondary" 
        size="lg" 
        className="me-1 float-end"
        id="wd-add-group-btn"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>
      
      <div className="d-inline-block" style={{ width: "300px" }}>
        <InputGroup>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch />
          </span>
          <Form.Control
            type="text"
            placeholder="Search for Assignment"
            className="border-start-0"
          />
        </InputGroup>
      </div>
    </div>
  );
}