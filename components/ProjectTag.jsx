import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "tag_button_selected"
    : "tag_button_unselected";
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