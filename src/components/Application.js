import React, { useState } from "react";

import "components/Application.scss";
import DayList from "./DayList";
import InterviewerList from "./InterviewerList";

export default function Application(props) {
  const days = [
    {
      id: 1,
      name: "Monday",
      spots: 2
    },
    {
      id: 2,
      name: "Tuesday",
      spots: 5
    },
    {
      id: 3,
      name: "Wednesday",
      spots: 0
    }
  ];
  const interviewers = [
    { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
    { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
    { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
    { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
    { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" }
  ];
  const [day, setDay] = useState("Monday");
  const [interviewer, setInterviewer] = useState(1);
  console.log(day);
  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={days} day={day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        <InterviewerList
          interviewers={interviewers}
          interviewer={interviewer}
          onChange={setInterviewer}
        />
      </section>
    </main>
  );
}
