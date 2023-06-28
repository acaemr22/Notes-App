import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/notesSlice";
import { XCircle } from "@phosphor-icons/react";


const NotesList = () => {
  const deleteRef = useRef(null) 
  const dispatch = useDispatch()
  const searchText = useSelector((state) => state.notes.searchText);
  const notesList = useSelector((state) => state.notes.notesList);
  const filteredNotes =
    notesList.filter(
      (note) =>
        note.text.includes(searchText) || note.title.includes(searchText)
    ) || notesList;

  return (
    <section className="flex w-full flex-row gap-5 justify-center flex-wrap">
      {filteredNotes.map((note) => (
        <div
          key={note.id}
          className={`${note.color} rounded-md flex flex-col text-sm sm:text-md overflow-auto lg:text-lg w-[46%] sm:w-[31%] p-3 gap-x-3 gap-y-2`}
        >
          <div className="font-semibold flex flex-row justify-between">
            {/* <input readOnly={true} className={`read-only:outline-none `} value={note.title} type="text" /> */}
            {note.title}
            <div ref={deleteRef} className="cursor-pointer" onClick={() => dispatch(deleteNote({id: note.id}))}>
              <XCircle className="hover:text-red-400" size={24} />
            </div>
          </div>
          {/*  */}
          <hr />
          <div>{note.text}</div>
        </div>
      ))}
    </section>
  );
};

export default NotesList;
