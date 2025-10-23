"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvents from "./PassingDataOnEvents";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";

export default function Lab4() {
    function sayHello() { // implement callback function
        alert("Hello!");
    }
  return (
    <div>
          <h2>Lab 4 </h2>

           <ClickEvent />
           <PassingDataOnEvents />
           <PassingFunctions theFunction={sayHello} />
           <EventObject />
           <Counter />
           <BooleanStateVariables />
           <StringStateVariables />
           <DateStateVariable />
           <ObjectStateVariable />
           <ArrayStateVariable />
           <ParentStateComponent />
    </div>
);
}
