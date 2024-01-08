import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6551f8881a5694b8573a8f02",
      user: "652c2d95b6ef23c3daf7edf2",
      title: "Money House",
      description:
        "What is Moneyhouse in Switzerland? At Moneyhouse, you will find information that you can put to immediate use. The platform offers lots of information free of charge for anyone interested in business. Registered users receive notifications by email, see the network of people involved and the current management of companies.",
      tag: "Latest Book",
      date: "2023-11-13T10:20:56.485Z",
      __v: 0,
    },
    {
      _id: "6551f8881a5694b873a8f03",
      user: "652c2d95b6ef23c3daf7edf2",
      title: "Money House",
      description:
        "What is Moneyhouse in Switzerland? At Moneyhouse, you will find information that you can put to immediate use. The platform offers lots of information free of charge for anyone interested in business. Registered users receive notifications by email, see the network of people involved and the current management of companies.",
      tag: "Latest Book",
      date: "2023-11-13T10:20:56.485Z",
      __v: 0,
    },
    {
      _id: "6551f8881a5694b8573a8f06",
      user: "652c2d95b6ef23c3daf7edf2",
      title: "Money House",
      description:
        "What is Moneyhouse in Switzerland? At Moneyhouse, you will find information that you can put to immediate use. The platform offers lots of information free of charge for anyone interested in business. Registered users receive notifications by email, see the network of people involved and the current management of companies.",
      tag: "Latest Book",
      date: "2023-11-13T10:20:56.485Z",
      __v: 0,
    },
    {
      _id: "6551f8881a5694b8573a8f08",
      user: "652c2d95b6ef23c3daf7edf2",
      title: "Money House",
      description:
        "What is Moneyhouse in Switzerland? At Moneyhouse, you will find information that you can put to immediate use. The platform offers lots of information free of charge for anyone interested in business. Registered users receive notifications by email, see the network of people involved and the current management of companies.",
      tag: "Latest Book",
      date: "2023-11-13T10:20:56.485Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO API Call
    console.log("Adding a New Notes");
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
  const deleteNote = (id) => {
     //TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note)=>{return note._id!==id});
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = (id, title, description,tag) => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
