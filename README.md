# Interview Scheduler

Using the latest tools and techniques, I built and tested a React application that allows students to book, edit and cancel interviews with a mentor. I combined a concise API with a WebSocket server to build a realtime experience. During development Jest, Storybook, and Cypress were used for integration, isolation, and end-to-end testing.

# Demo

When an application is loaded a request is made to an API server and the appointments are displayed. Appointments can be made each day of the week and choosing another day will show the appointment availabilties for that day.

Students can:

- Book an appointment by selecting an empty slot, which will display a form that allows them to type their name and choose a mentor. Once the save button is clicked a dave action will be triggered which will make a request to the server which is depicted by a status indicator. Once the request is complete the interview is shown with the added data.
- Edit an existing interview, this allows them to change the student name and the interviewer.
- Delete an interview, the app will confirm with the user if they want to delete the appointment as this is a desstructive action.

If the server returns an error while saving or deleting an apoointment an appropriate error message is displayed.

![](https://github.com/asmxali/scheduler/blob/master/InterviewScheduler.gif)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
