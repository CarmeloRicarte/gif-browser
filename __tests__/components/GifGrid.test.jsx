import { render, screen } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { GifGrid } from "./../../src/components/GifGrid";

vi.mock("../../src/hooks/useFetchGifs"); // do a mock of useFetchGifs
describe("Tests of <GifGrid />", () => {
  const category = "Ibai";

  test("should match with the snapshot", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    const { container } = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();
  });

  test("should show the loading at init", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show items when images are loaded with useFetchGifs", () => {
    const gifs = [
      {
        id: "1",
        url: "https://example.com/gifs/1.gif",
        title: "Ibai G2",
      },
      {
        id: "2",
        url: "https://example.com/gifs/2.gif",
        title: "Ibai de locos",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
