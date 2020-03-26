export function getAppointmentsForDay(state, day) {
  //returns an empty array if the day doesn't exist or there are no interviews for that day
  if (state.days.length === 0) return [];
  if (!state.days.map(item => item.name).includes(day)) return [];
  //filters state.days for that specific day
  const filteredDays = state.days.filter(element => element.name === day)[0]
    .appointments;
  //finds appointments for that specific day
  const filteredAppointments = filteredDays.map(id => state.appointments[id]);
  return filteredAppointments;
}

export function getInterviewersForDay(state, day) {
  //filters state.days for that specific day
  const found = state.days.find(d => day === d.name);
  //returns an empty array if the day doesn't exist or there are no interviews for that day
  if (state.days.length === 0 || found === undefined) return [];
  //finds interviewers for that specific day
  return found.interviewers.map(id => state.interviewers[id]);
}

export function getInterview(state, interview) {
  //if an interview exists it will return the interview data which contains:
  //the student and the interviewer
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
