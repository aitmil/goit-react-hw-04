import css from "./ImageCard.module.css";

export default function ImageCard({ image: { urls, description }, openModal }) {
  return (
    <div>
      <img
        src={urls.small}
        alt={description}
        onClick={openModal(urls.regular, description)}
      ></img>
    </div>
  );
}
