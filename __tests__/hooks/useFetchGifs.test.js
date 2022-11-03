import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests of useFetchGifs hook', () => {
    const category = 'Ibai';
    test('should return the initial state', () => {
        const { result } = renderHook(() => useFetchGifs(category));
        const { images, isLoading } = result.current;
        expect(images).toEqual([]);
        expect(isLoading).toBeTruthy();

    });

    test('should return an images array and isLoading as false', async () => {
        const { result } = renderHook(() => useFetchGifs(category));
        // await until there are images
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();

    });
});