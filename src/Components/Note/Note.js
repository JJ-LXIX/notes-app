import React from "react";
import "./Note.css";
import deleteIcon from "../../images/binIcon.png";
const Note = (props) => {
  return (
    <div className="note " style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text custom-scroll"
        defaultValue={props.note.text}
      />
      <div className="note_footer">
        <p>{props.note.time} </p>
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
