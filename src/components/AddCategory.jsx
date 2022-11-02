import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  /**
   * When the input changes, set the input value to the value of the input.
   */
  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  /**
   * The function onSubmit calls the function onNewCategory, which is passed in as a prop from the
   * parent component.
   * The function onNewCategory is passed the value of the input field.
   * @returns The input value is being returned.
   */
  const onSubmit = (event) => {
    event.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) {
      return;
    }
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        id="seachGifs"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
