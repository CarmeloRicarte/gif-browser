import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Tests of <GifItem />", () => {
  test("should match with snapshot", () => {
    const title = "Dragon Ball Ultra Instinct GIF by Toei Animation";
    const url =
      "https://media3.giphy.com/media/19JSJ5ucu91R5D7a3w/giphy.gif?cid=947a36cfqz7o481dq7dqg783yfc0888b1zif61sx5u761lrp&rid=giphy.gif&ct=g";

    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
