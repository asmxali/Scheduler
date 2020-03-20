import React, { useState, useEffect } from "react";

import "components/Application.scss";
import DayList from "./DayList";
// import InterviewerList from "./InterviewerList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay } from "helpers/selectors";
import axios from "axios";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });

  useEffect(() => {
    axios.get(`http://localhost:8001/api/days`).then(response => {
      // console.log(response.data);
      // setDays(response.data);
      Promise.all([
        Promise.resolve(axios.get(`http://localhost:8001/api/days`)),
        Promise.resolve(axios.get(`http://localhost:8001/api/appointments`)),
        Promise.resolve(axios.get(`http://localhost:8001/api/interviewers`))
      ]).then(all => {
        const [first, second, third] = all;
        // console.log(first.data, second.data, third.data);

        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      });
    });
  }, []);
  console.log(state.interviewers);
  const appointments = getAppointmentsForDay(state, state.day);

  const schedule = appointments.map(appointment => {
    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
      />
    );
  });
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
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {getAppointmentsForDay(state, state.day).map(a => {
          return (
            <Appointment id={a.id} time={a.time} interview={a.interview} />
          );
        })}
        <Appointment id="last" time="5pm" />
      </section>
    </main>
  );
}
