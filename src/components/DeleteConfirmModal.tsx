// Dependencies
import { useContext } from "react";
import NotesContext from "../context/notesContext";
import toggleDeleteModal from "../utils/toggleDeleteModal";
// Styles
import "../styles/DeleteConfirmModal.css";

function DeleteConfirmModal() {
  const { notes, setNotes, currentNoteIndex, setCurrentNote, currentNote } =
    useContext(NotesContext);

  function deleteCurrentNote() {
    setNotes((prevNotes) => {
      const temp = [...prevNotes];
      temp.splice(currentNoteIndex, 1);
      return temp;
    });

    // Logic to set the next note after deletion
    const nextIndex = currentNoteIndex === 0 ? 1 : currentNoteIndex - 1;
    setCurrentNote(() => notes[nextIndex]);

    toggleDeleteModal();
  }

  return (
    <div id="delete-modal-container" className="hide">
      <div className="overlay" onClick={toggleDeleteModal}></div>
      <div className="modal">
        <h4 className="modal__title">Delete this document?</h4>
        <p className="modal__description">
          Are you sure you want to delete{" "}
          <span className="current-note-title">{currentNote.title}</span>{" "}
          document and its contents? This action cannot be reversed.
        </p>
        <div className="actions">
          <button
            className="accent-btn"
            type="submit"
            onClick={deleteCurrentNote}
          >
            Delete
          </button>
          <button type="reset" onClick={toggleDeleteModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
