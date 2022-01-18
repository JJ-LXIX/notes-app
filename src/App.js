import React from "react";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <NoteContainer />
    </div>
  );
}

export default App;
