import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

/**
 * It returns an object with two properties: images and isLoading
 * @param category - The category of the gifs we want to fetch.
 * @returns An object with two properties: images and isLoading.
 */
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    /**
     * An async function that gets the images from the getGifs function and sets the images to the
     * newImages.
     */
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
