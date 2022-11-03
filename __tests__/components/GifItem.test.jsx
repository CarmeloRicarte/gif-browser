import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Tests of <GifItem />", () => {
  const title = "Dragon Ball Ultra Instinct GIF by Toei Animation";
  const url =
    "https://media3.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=947a36cfqz7o481dq7dqg783yfc0888b1zif61sx5u761lrp&rid=giphy.gif&ct=g";

  test("should match with snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the image with the URL and the alt indicated", () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should show the title in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
