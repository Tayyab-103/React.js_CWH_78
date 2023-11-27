import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    "name": "Tayyab",
    "class": "BSCS",
  };
const [state,setSate] = useState(s1);

const update = ()=>{
    setTimeout(() => {
        setSate({
          name: "Hameed",
          class: "BSCH",
        });
        
    }, 1000);
}

  return (
    <NoteContext.Provider value={{state, update}}>
        {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
