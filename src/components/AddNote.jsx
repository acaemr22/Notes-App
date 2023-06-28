import React, { useState } from "react";
import { Check } from "@phosphor-icons/react";
import Colors from "./Colors";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote } from "../features/notes/notesSlice";

const AddNote = () => {
  const keys = {
    enter: false,
    control: false,
  };

  // window.onload = () => {
  //   const textArea = document.getElementByClassName("textArea");
  //   textArea.addEventListener("keyup", (event) => {
  //     if (event.key === "enter") {
  //       keys.enter = true;
  //     }
  //     if (event.ctrlKey) {
  //       keys.control = true;
  //     }

  //     if (keys.enter && keys.control) {
  //       handleAddNote();
  //     }
  //   });
  //   textArea.addEventListener("keydown", (event) => {
  //     if (event.key === "enter") {
  //       keys.enter = false;
  //     }
  //     if (event.ctrlKey) {
  //       keys.control = false;
  //     }
  //   });
  // };

  const bgColor = useSelector((state) => state.notes.bgColor);
  const dispatch = useDispatch();
  const [text, setText] = useState(localStorage.getItem("text") ?? "");
  const [title, setTitle] = useState(localStorage.getItem("title") ?? "");
  const handleAddNote = () => {
    if (text && title) {
      dispatch(addNote({ title, text }));
      setText("");
      setTitle("");
      dispatch(deleteNote({id: "0"}))
    }
  };

  return (
    <section
      className={`w-full h-full flex flex-col items-center justify-center gap-y-3`}
    >
      <div className={`"h-24 w-1/2 " lg:w-1/3 p-1 px-2 rounded-md ${bgColor}`}>
        <input
          value={title}
          maxLength={"500"}
          onChange={(e) => setTitle(e.target.value)}
          id="note-input"
          className={`"h-5/6 outline-none  w-full resize-none  textarea " ${
            bgColor != "bg-white"
              ? bgColor + " placeholder:text-white"
              : "placeholder:text-gray-500"
          }`}
          type="text"
          placeholder="Enter your note title here"
        />
      </div>
      <div className={`${bgColor} flex sm:w-3/4 w-[95%] lg:w-1/2 flex-col shadow-md rounded-md p-3`}>
        <div className="h-24 ">
          <textarea
            value={text}
            maxLength={"500"}
            onChange={(e) => setText(e.target.value)}
            id="note-input"
            className={`"h-5/6 outline-none  w-full resize-none  textarea " ${
              bgColor != "bg-white"
                ? bgColor + " placeholder:text-white"
                : "placeholder:text-gray-500"
            }`}
            type="text"
            placeholder="Enter your note here..."
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-[3px]">
            <Colors />
          </div>
          <button
            onClick={handleAddNote}
            className="bg-green-300 hover:bg-green-400 font-semibold rounded-lg p-2 text-sm"
          >
            Add Note
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddNote;
