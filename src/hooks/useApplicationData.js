import { useState, useEffect } from "react";
import axios from "axios";
export default function useApplicationData() {
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
        setState(prev => ({
          ...prev,
          days: all[0].data,
          appointments: all[1].data,
          interviewers: all[2].data
        }));
      });
    });
  }, []);
  function refreshPage() {
    window.location.reload(false);
  }

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //creates a new state.days object with the updated spots
    //spots decreases by one when a new appointment is booked
    const a = state.days.map(day => {
      if (day.name === state.day) {
        day.spots--;
      }
      return day;
    });

    return axios.put(`api/appointments/${id}`, appointment).then(() =>
      setState({
        ...state,
        appointments
      })
    );
  };

  const cancelInterview = id => {
    console.log("before: ", state.appointments[id].interview);
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    //creates a new state.days object with the updated spots
    //spots increases by one when an appointment is deleted
    const a = state.days.map(day => {
      if (day.name === state.day) {
        day.spots++;
      }
      return day;
    });
    return axios.delete(`api/appointments/${id}`, appointment).then(() =>
      setState({
        ...state,
        appointments
      })
    );
  };

  return { cancelInterview, bookInterview, state, setDay };
}
