import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import GifsList from "../GifsList/GifsList";
import styles from "../Main/Main.module.css";
import Input from "../UI/Input/Input";

function Main() {
  const [gifs, setGifs] = useState();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getGifs = async () => {
    let res = await axios.get(
      `https://g.tenor.com/v1/search?q=${query}&key=LIVDSRZULELA&limit=16`
    );
    setGifs(res.data.results);
    setIsLoading(true);
  };

  const handleButtonClick = () => {
    getGifs();
  };

  const memoizedComponentX = useMemo(() => {
    return <GifsList gifs={gifs} isLoading={isLoading} />;
  }, [gifs]);

  return (
    <div
      className={
        isLoading
          ? [styles.mainPaper, styles.mainPaperActive].join(" ")
          : styles.mainPaper
      }
    >
      <div className={styles.searchBlock}>
        <Input
          onChange={(e) => {
            console.log(e.target.value);
            setQuery(e.target.value);
          }}
          value={query}
          placeholder="GIFs search"
        />
        <button className={styles.searchButton} onClick={handleButtonClick}>
          <img
            src="https://img.icons8.com/?size=256&id=7695&format=png"
            alt=""
            width={"32px"}
            className={styles.iconSearch}
          />
        </button>
      </div>
      {memoizedComponentX}
    </div>
  );
}

export default Main;
