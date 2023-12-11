import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 text-whitebg-gradient-to-br from-[#C33764] to-[#1D2671] hover:bg-slate-800 text-white"
    : "block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-white ";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer `}
      onClick={() => onClick(name)}
    >
      {name}
    </button>

  );
};

export default ProjectTag;