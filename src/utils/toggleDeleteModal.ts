// toggles the 'hide' css class on '#delete-modal-container' element

export default function toggleDeleteModal(): void {
  const modalContainer = document.querySelector("#delete-modal-container");
  modalContainer?.classList.toggle("hide");
}
