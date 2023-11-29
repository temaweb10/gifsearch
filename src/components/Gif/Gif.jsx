import React from "react";
import styles from "../Gif/Gif.module.css";
function Gif({ gifObj }) {
  console.log(gifObj.media[0].gif.url);
  return (
    <div className={styles.gifItem}>
      <img
        className={styles.gifImage}
        src={gifObj.media[0].gif.url}
        alt="я джифка"
      ></img>
    </div>
  );
}

export default Gif;
