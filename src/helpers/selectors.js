export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) return [];
  if (!state.days.map(item => item.name).includes(day)) return [];
  const filteredDays = state.days.filter(element => element.name === day)[0]
    .appointments;
  const filteredAppointments = filteredDays.map(id => state.appointments[id]);
  return filteredAppointments;
}

export function getInterview(state, day) {
  if (state.days.length === 0) return [];
  if (!state.days.map(item => item.name).includes(day)) return [];
  const filteredDays = state.days.filter(element => element.name === day)[0]
    .interviewers;
  const filteredAppointments = filteredDays.map(id => state.interviewers[id]);
  return filteredAppointments;
}
