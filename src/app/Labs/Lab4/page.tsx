"use client";

import { Provider } from "react-redux";
import ReduxExamples from "./ReduxExamples/page";
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
import store from "./store";

export default function Lab4() {
  function sayHello() {
    // implement callback function
    alert("Hello!");
  }
  return (
    <Provider store={store}>
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
      <ReduxExamples />
      
    </div>
    </Provider>
  );
}
