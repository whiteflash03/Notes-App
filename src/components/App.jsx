import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((preValue) => {
      return [...preValue, note];
    });
  }

  function deleteNote(id) {
    setNotes((preValues) => {
      return preValues.filter((noteItems, index) => {
        return !index === id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map((notes) => (
        <Note key={notes.id} title={notes.title} content={notes.content} />
      ))} */}
      {notes.map((noteItems, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItems.title}
            content={noteItems.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
