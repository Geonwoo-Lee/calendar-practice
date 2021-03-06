
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const locales = {
    "ko": require("date-fns/locale/ko"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2021, 9, 1),
        end: new Date(2021, 9, 5),
    },
    {
        title: "Vacation",
        start: new Date(2021, 9, 7),
        end: new Date(2021, 9, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 9, 20),
        end: new Date(2021, 9, 23),
    },
];


function App() {
  const [newEvent, setNewEvent] = useState({title: "", start: "", end: ""})
  const [allEvent, setAllEvent] = useState(events)


  const handleAddEvent = () => {
    setAllEvent([...allEvent, newEvent])
  }



  return (
    <div className="App">
      <h1>Calendar</h1>
      <h2>Add New Event</h2>
      <div>
        <input type = 'text' placeholder = " Add Title" style = {{widows: "20%", marginRight: "10px"}} value = {newEvent.title} onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
        <DatePicker placeholderText="start date" style={{marginRight: "10px"}}
        selected={newEvent.start} onChange={(start) => setNewEvent({...newEvent, start})}/>
        <DatePicker placeholderText="End date"
        selected={newEvent.end} onChange={(end) => setNewEvent({...newEvent, end})}/>
        <button style={{marginTop: "10px"}}onClick={handleAddEvent}>
          Add Event
        </button>
      </div>
     <Calendar localizer={localizer} events={allEvent} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />

    </div>
  );
}

export default App;
