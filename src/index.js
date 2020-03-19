import React from "react";
import { render } from "react-dom";

import * as serviceWorker from './serviceWorker';

import Form from "@rjsf/core";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};



const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}, e) => console.log("Data submitted: ",  formData);


render((
    <Form schema={schema}
          onChange={log("changed")}
          onSubmit={onSubmit}
          onError={log("errors")} />
  ), document.getElementById("root"));;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
