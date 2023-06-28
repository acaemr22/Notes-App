import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notesList: (JSON.parse(localStorage.getItem("notesList"))) ?? [
      {
        title: "Hi Note Taker 👋",
        text: "Hello you will your notes to here.",
        id: "0",
        color: "bg-white",
      },
    ],
    bgColor: "bg-white",
    colors: [
      {
        color: "bg-pink-500",
        selected: false,
        id: "1",
      },
      {
        color: "bg-purple-500",
        selected: false,
        id: "2",
      },
      {
        color: "bg-yellow-400",
        selected: false,
        id: "3",
      },
      {
        color: "bg-blue-500",
        selected: false,
        id: "4",
      },
      {
        color: "bg-green-500",
        selected: false,
        id: "5",
      },
      {
        color: "bg-white",
        selected: true,
        id: "6",
      },
    ],
    searchText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.notesList.push({
        id: nanoid(),
        ...action.payload,
        color: state.bgColor,
      });
      state.filteredNotes = state.notesList;
      localStorage.setItem("notesList", JSON.stringify(state.notesList))
    },
    setColor: (state, action) => {
      const { id } = action.payload;
      state.bgColor = state.colors.find((color) => color.id === id).color;
      state.colors = state.colors.map((color) =>
      color.id === id
      ? { ...color, selected: state.bgColor === color.color ? true : false }
      : { ...color, selected: false }
      );
    },
    searchNotes: (state, action) => {
      state.searchText = action.payload.searchText;
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      state.notesList = state.notesList.filter((note) => note.id !== id);
      localStorage.setItem("notesList", JSON.stringify(state.notesList))
    },
  },
});

export default notesSlice.reducer;
export const { setColor, addNote, searchNotes, deleteNote } = notesSlice.actions;
