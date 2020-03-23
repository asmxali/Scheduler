import React, { useEffect } from "react";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";
import Form from "components/Appointment/Form";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import "index.scss";
import useVisualMode from "hooks/useVisualMode";
import "components/Appointment/styles.scss";
import Header from "./Header";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function deleteInt(id) {
    transition(DELETING);
    props.cancelInterview(props.id).then(() => transition(EMPTY));
  }
  function confirmDeletion() {
    transition(CONFIRM);
  }
  function editInterview() {
    transition(EDIT);
  }
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  }
  return (
    <article className="appointment">
      <Header id={props.id} time={props.time} />
      {mode === SHOW && props.interview && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={confirmDeletion}
          onEdit={editInterview}
          message="Deleting"
        />
      )}
      {mode === CONFIRM && (
        <Confirm onConfirm={deleteInt} onCancel={() => back()} />
      )}
      {mode === EDIT && (
        <Form
          name={props.interview.student}
          interviewer={props.interview.interviewer.id}
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === DELETING && <Status message="Deleting" />}
      {mode === CREATE && (
        <Form
          interviewers={props.interviewers}
          onSave={save}
          onCancel={() => back()}
        />
      )}
      {mode === SAVING && <Status message="Saving" />}
    </article>
  );
}
