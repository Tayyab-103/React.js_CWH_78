import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fecthallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzJkOTViNmVmMjNjM2RhZjdlZGYyIn0sImlhdCI6MTY5NzgwNTE0OH0.t84zG3dTndGTW2_PVbwgCfTyG-Lz98CPNFqQdpI4nXA",
      },
    });
    const json = await response.json(); //response.json async function hy
    console.log(json);
    setNotes(json);
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO API Call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzJkOTViNmVmMjNjM2RhZjdlZGYyIn0sImlhdCI6MTY5NzgwNTE0OH0.t84zG3dTndGTW2_PVbwgCfTyG-Lz98CPNFqQdpI4nXA",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    // console.log("Adding a New Notes");
    const note = {
      _id: "6551f8881a5694b8653a8f08",
      user: "652c2d95b6ef23c3daf7edf2",
      title,
      description,
      tag,
      date: "2023-11-13T10:20:56.485Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzJkOTViNmVmMjNjM2RhZjdlZGYyIn0sImlhdCI6MTY5NzgwNTE0OH0.t84zG3dTndGTW2_PVbwgCfTyG-Lz98CPNFqQdpI4nXA",
      },
    });

    const json = response.json();
    console.log(json, "DELETE RESPONSE.JS");

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUyYzJkOTViNmVmMjNjM2RhZjdlZGYyIn0sImlhdCI6MTY5NzgwNTE0OH0.t84zG3dTndGTW2_PVbwgCfTyG-Lz98CPNFqQdpI4nXA",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = await response.json(); //response.json async function hy
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
