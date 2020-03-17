import React from "react";
import classnames from "classnames";

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewerClass = classnames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });
  return (
    <li selected onClick={props.setInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? props.name : ""}
    </li>
  );
}
