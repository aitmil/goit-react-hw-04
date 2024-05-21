import css from "./ImageCard.module.css";

export default function ImageCard({ image: { urls, description }, openModal }) {
  return (
    <div onClick={() => openModal(urls.regular, description)}>
      <img src={urls.small} alt={description}></img>
    </div>
  );
}
