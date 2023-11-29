import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "653fb4f6a6cb626ed0d50374",
      user: "652c2d95b6ef23c3daf7edf2",
      title: "My Title",
      description: "Please wake up early",
      tag: "personal",
      date: "2023-10-30T13:51:50.655Z",
      __v: 0,
    },
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
  ];

  const [notes, setNotes] = useState(notesInitial)
 
  return (
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
