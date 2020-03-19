import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList";
// import InterviewerList from "./InterviewerList";
import Appointment from "components/Appointment";
import axios from "axios";

export default function Application(props) {
  const appointmentData = [
    {
      id: 1,
      time: "12pm"
    },
    {
      id: 2,
      time: "1pm",
      interview: {
        student: "Asmaa Ali",
        interviewer: {
          id: 4,
          name: "Cohana Roy",
          avatar: "https://i.imgur.com/FK8V841.jpg"
        }
      }
    },
    {
      id: 3,
      time: "2pm",
      interview: {
        student: "Raho Mohamed",
        interviewer: {
          id: 3,
          name: "Mildred Nazir",
          avatar: "https://i.imgur.com/T2WwVfS.png"
        }
      }
    },
    {
      id: 4,
      time: "3pm"
    },
    {
      id: 5,
      time: "4pm",
      interview: {
        student: "Lydia Miller-Jones",
        interviewer: {
          id: 2,
          name: "Tori Malcolm",
          avatar: "https://i.imgur.com/Nmx0Qxo.png"
        }
      }
    }
  ];

  const [day, setDay] = useState("Monday");
  const [days, setDays] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8001/api/days`).then(response => {
      console.log(response.data);
      setDays(response.data);
    });
  }, []);

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
        {appointmentData.map(a => {
          return (
            <Appointment id={a.id} time={a.time} interview={a.interview} />
          );
        })}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}
