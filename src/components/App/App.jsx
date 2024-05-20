import { useState, useEffect } from "react";
import "modern-normalize";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../image-api";
import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setImageUrl] = useState("");
  const [selectedImageAlt, setImageAlt] = useState("");

  useEffect(() => {
    async function fetchImages() {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    searchQuery !== 0 && fetchImages();
  }, [searchQuery, page]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setIsError(false);
  };

  const handleLoadMore = async () => setPage(page + 1);

  const handleOpenModal = (imageUrl, imageAlt) => {
    setImageUrl(imageUrl);
    setImageAlt(imageAlt);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => setModalIsOpen(false);

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ImageGallery images={images} onImageClick={handleOpenModal} />
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal
        openModal={handleOpenModal}
        closeModal={handleCloseModal}
        imageUrl={selectedImageUrl}
        imageAlt={selectedImageAlt}
      />
    </div>
  );
}
