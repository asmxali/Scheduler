export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  if (!state.days.map(item => item.name).includes(day)) return [];
  const filteredDays = state.days.filter(element => element.name === day)[0]
    .appointments;
  const filteredAppointments = filteredDays.map(id => state.appointments[id]);
  return filteredAppointments;
}

export function getInterviewersForDay(state, day) {
  const found = state.days.find(d => day === d.name);

  if (state.days.length === 0 || found === undefined) return [];
  return found.interviewers.map(id => state.interviewers[id]);
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
