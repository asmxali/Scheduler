export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  if (!state.days.map(item => item.name).includes(day)) return [];
  const filteredDays = state.days.filter(element => element.name === day)[0]
    .appointments;
  const filteredAppointments = filteredDays.map(id => state.appointments[id]);
  return filteredAppointments;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) return [];
  if (!state.days.map(item => item.name).includes(day)) return [];
  const filteredDays = state.days.filter(element => element.name === day)[0]
    .appointments;
  const filteredAppointments = filteredDays.map(id => state.appointments[id]);

  const filteredInterviewersID = filteredAppointments
    .map(app => {
      if (app.interview) {
        return app.interview.interviewer;
      }
    })
    .filter(id => id != undefined);
  const filteredInterviewers = filteredInterviewersID.map(id => {
    if (state.interviewers[id]) return state.interviewers[id];
  });

  console.log(filteredInterviewers);
  return filteredInterviewers;
}

export function getInterview(state, interview) {
  if (interview) {
    const interviewer = state.interviewers[interview.interviewer];
    return {
      ...interview,
      interviewer
    };
  } else {
    return null;
  }
}
