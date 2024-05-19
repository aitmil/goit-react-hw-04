import { useState, useEffect } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <LoadMoreBtn />
      <ImageModal />
    </div>
  );
}
