// Dependencies
import { useContext } from "react";

// SVGs
import { ReactComponent as BinIcon } from "../assets/icons/delete-bin-line.svg";

// Context
import NotesContext from "../context/notesContext";

// Components
import toggleDeleteModal from "../utils/toggleDeleteModal";

function DeleteBtn() {
  const { notes } = useContext(NotesContext);
  return (
    <span
      className="bin-icon"
      onClick={() => {
        if (notes.length > 1) {
          toggleDeleteModal();
        } else return;
      }}
    >
      <BinIcon />
    </span>
  );
}

export default DeleteBtn;
