import React, { useState } from "react";
import InterviewerList from "../InterviewerList";
import Button from "../Button";

export default function Form(props) {
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setName("");
    setInterviewer(null);
    props.onCancel();
  }

  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!interviewer) {
      setError("An interviewer must be selected");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  }
  const [error, setError] = useState("");
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            onChange={event => setName(event.target.value)} // how??
            data-testid="student-name-input"
            value={name}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <h4 className="text--light">Interviewer</h4>
        <InterviewerList
          interviewers={props.interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={reset}>
            Cancel
          </Button>
          <Button
            confirm
            onClick={() => {
              validate();
            }}
          >
            Save
          </Button>
        </section>
      </section>
    </main>
  );
}
