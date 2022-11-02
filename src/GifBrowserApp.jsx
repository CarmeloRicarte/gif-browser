import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifBrowserApp = () => {
  const [categories, setCategories] = useState(["Fútbol", "F1"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories((categories) => [newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Browser</h1>

      <AddCategory onNewCategory={onAddCategory} />

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
