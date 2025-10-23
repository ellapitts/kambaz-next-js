import { useState } from "react";
import { Button } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    {
      /* event handler appends random num at end of array */
    }
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
    {
      /* event handler removes element by index  */
    }
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <Button variant="btn btn-success" onClick={addElement} className="mb-3">
        Add Element
      </Button>{" "}
      {/* button calls addElement to append to array iterate over array items*/}
      <ul className="list-unstyled">
        {array.map((item, index /* render item's value */) => (
          <li key={index} className="list-group-items">
            {item}
            <Button
              variant="btn btn-danger"
              onClick={() => deleteElement(index)}
              className="ms-3"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
