import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

const NoteContainer = () => {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container-notes custom-scroll">
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
        <Note note={{ text: "hello there", time: "4:32PM", color: "cyan" }} />
      </div>
    </div>
  );
};

export default NoteContainer;
