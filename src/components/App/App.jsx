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
    fetchImages();
  }, [searchQuery, page]);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} />
      <Loader isLoading={isLoading} />
      {isError && <ErrorMessage />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      <ImageModal />
    </div>
  );
}
