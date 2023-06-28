import React from "react";
import { Check } from "@phosphor-icons/react";
import { useSelector, useDispatch } from "react-redux";
import { setColor } from "../features/notes/notesSlice";

const Colors = () => {
  const dispatch = useDispatch();
  const colors = useSelector((state) => state.notes.colors);
  const colorsList = [
    {
      color: "bg-pink-500",
    },
    {
      color: "bg-purple-500",
    },
    {
      color: "bg-yellow-400",
    },
    {
      color: "bg-blue-500",
    },
    {
      color: "bg-green-500",
    },
  ];

  window.onload = () => {
    let colors = document.querySelectorAll(".color");
    colors.forEach((color) => {
      color.addEventListener("mouseover", (event) => {
        color.children[0].classList.add("block");
        color.children[0].classList.remove("hidden");
      });
      color.addEventListener("mouseout", (event) => {
        if (!color.children[0].classList.contains("selected")) {
          color.children[0].classList.add("hidden");
          color.children[0].classList.remove("block");
        }
      });
    });
  };

  return (
    <>
      {colors.map((colorObj, index) => (
        <div
          key={index}
          onClick={() => dispatch(setColor({ id: colorObj.id }))}
          className={`color cursor-pointer rounded-full flex items-center justify-center  ${colorObj.color} w-5 h-5`}
        >
          <Check
            className={colorObj.selected ? "block selected" : "hidden"}
            size={12}
          />
        </div>
      ))}
    </>
  );
};

export default Colors;
