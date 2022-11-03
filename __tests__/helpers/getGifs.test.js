import { getGifs } from "../../src/helpers/getGifs.js";

describe('Tests of getGifs', () => {
    test('should return an array of gifs', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        // evaluate the object type of first gif
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });
});