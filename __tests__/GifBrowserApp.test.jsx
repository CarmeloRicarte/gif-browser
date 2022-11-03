import { fireEvent, render, screen } from "@testing-library/react";
import { useFetchGifs } from "../src/hooks/useFetchGifs";
import { GifBrowserApp } from "./../src/GifBrowserApp";

describe("Test of <GifBrowserApp />", () => {
  test("should match with the snapshot", () => {
    const container = render(<GifBrowserApp />);
    expect(container).toMatchSnapshot();
  });

  test("should show the category entered after search", () => {
    render(<GifBrowserApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    // enter the category and submit it
    fireEvent.change(input, { target: { value: "Ibai" } });
    fireEvent.submit(form);
    // find the category in the list
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("Ibai");
  });

  test("should not add the category if the category now exists", () => {
    render(<GifBrowserApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    // enter the category and submit it
    fireEvent.change(input, { target: { value: "Ibai" } });
    fireEvent.submit(form);
    // enter the same category and submit it again
    fireEvent.change(input, { target: { value: "Ibai" } });
    fireEvent.submit(form);
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });
});
