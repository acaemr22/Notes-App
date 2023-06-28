import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchNotes } from "../features/notes/notesSlice";

const Header = () => {
  const dispatch = useDispatch()
  
  return (
    <section className="w-full flex items-center justify-center flex-col gap-y-8">
      <h1 className="text-2xl font-bold text-slate-600 ">NotesApp</h1>
      <form>
        <input
          type="text"
          onChange={(e) => dispatch(searchNotes({searchText: e.target.value})) }
          className="rounded-md pl-2 py-1 outline-blue-400"
          placeholder="Search..."
        />
      </form>
    </section>
  );
};

export default Header;
