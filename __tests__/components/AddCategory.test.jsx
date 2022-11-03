import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
describe("Test of <AddCategory />", () => {
  test("should match with snapshot", () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  test("should change the value of input", () => {
    // create test subject
    render(<AddCategory onNewCategory={() => {}} />);
    // extract the input. Only there is one textbox
    const input = screen.getByRole("textbox");

    // simulate onChange event for applying the new value
    fireEvent.change(input, { target: { value: "Ibai" } });
    expect(input.value).toBe("Ibai");
  });

  test("should call onNewCategory if the input has a value", () => {
    const inputValue = "Ibai";
    const onNewCategory = jest.fn(); // mock for onNewCategory

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe("");
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    // evaluates that onNewCategory is called with the input value
    expect(onNewCategory).toHaveBeenCalledWith(inputValue);
  });

  test("should not call onNewCategory if the input hasn't less or equal one character", () => {
    const inputValue = "a";
    const onNewCategory = jest.fn(); // mock for onNewCategory

    render(<AddCategory onNewCategory={onNewCategory} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    screen.debug();
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});
