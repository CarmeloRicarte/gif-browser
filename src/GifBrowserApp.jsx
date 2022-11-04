import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";
import GiphyImage from "./assets/giphy.gif";

export const GifBrowserApp = () => {
  const [categories, setCategories] = useState([]);

  /**
   * If the newCategory is not already in the categories array, add it to the beginning of the array.
   * @returns The newCategory is being returned.
   */
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Browser</h1>
      <img src={GiphyImage} alt="Powered by Giphy" />
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
