"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvents from "./PassingDataOnEvents";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";

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
    </div>
);
}
