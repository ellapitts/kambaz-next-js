// "use client";

// export const dynamic = 'force-dynamic'; // added due to reactjs build error

// import { useSelector, useDispatch} from "react-redux"; // read and write to reducer
// import { useState } from "react"; // maintain a and b parameters in UI
// import { add } from "./addReducer";
// import { FormControl, Button } from "react-bootstrap";

// type RootState = {
//   addReducer: {
//     sum: number;
//   };
// };


// export default function AddRedux() {
//   const [a, setA] = useState(12); // set a and b state variables to edit
//   const [b, setB] = useState(23); // parameters to add in the reducer
//   const { sum } = useSelector((state: RootState) => state.addReducer); // read the sum state variable from the reducer
//   const dispatch = useDispatch(); // dispatch to call add redux function
//   return (
//     <div className="w-25" id="wd-add-redux"> 
//       <h1>Add Redux</h1> {/* render local state variables a and b, as well */ }
//       <h2>{a} + {b} = {sum}</h2> {/* as application state variable sum */ }
//       <FormControl type="number" defaultValue={a}
//         onChange={(e) => setA(parseInt(e.target.value))} /> {/* update the local component state variable a */ }
//       <FormControl type="number" defaultValue={b}
//         onChange={(e) => setB(parseInt(e.target.value))} /> {/* update the local component state variable a  */ }
//       <Button id="wd-add-redux-click"
//               onClick={() => dispatch(add({ a, b }))}>  {/* update the local component state variable a  */ }
//         Add Redux
//       </Button>  {/* compute the arimetic addition of a and b   */ }
//       <hr/>   {/* and store it in application state */}
//     </div> // variable sum
//   );
// }
