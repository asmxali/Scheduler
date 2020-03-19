import React from "react";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import "index.scss";

import "components/Appointment/styles.scss";
import Header from "./Header";

export default function Appointment(props) {
  return (
    <article className="appointment">
      <Header id={props.id} time={props.time} />
      {props.interview ? (
        <Show
          interviewer={props.interview.interviewer}
          student={props.interview.student}
        />
      ) : (
        <Empty />
      )}
    </article>
  );
}
