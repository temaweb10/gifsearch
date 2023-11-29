import React from "react";
import Gif from "../Gif/Gif";
import styles from "../GifsList/GifsList.module.css";
function GifsList({ gifs, isLoading }) {
  if (!isLoading) {
    return "";
  }
  console.log(gifs);
  return (
    <div className={styles.gifsGallery}>
      {gifs.map((gifObj) => (
        <Gif gifObj={gifObj} key={Math.random() + Math.random()} />
      ))}
    </div>
  );
}

export default GifsList;
