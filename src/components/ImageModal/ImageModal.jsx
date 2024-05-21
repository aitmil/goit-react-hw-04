import Modal from "react-modal";
import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, isClose, imageUrl, imageAlt }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={isClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt={imageAlt} />
    </Modal>
  );
}
