import React from "react";
import "./Note.css";
import deleteIcon from "../../images/binIcon.png";
const Note = (props) => {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <div className="note " style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text custom-scroll"
        defaultValue={props.note.text}
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)} </p>
        <img
          className="delete-icon"
          src={deleteIcon}
          alt="delete"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
