import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "./InterviewerList.scss";

export default function InterviewerList(props) {
  const interviewer = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.onChange(interviewer.id)}
      />
    );
  });
  return (
    <section className="interviewers">
      <ul className="interviewers__list">{interviewer}</ul>
    </section>
  );
}
