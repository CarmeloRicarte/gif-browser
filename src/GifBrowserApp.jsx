import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";

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
      <img src="public/assets/giphy.gif" alt="Powered by Giphy" />
      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
