export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=AC67e6s6vKXTlPIYyz5KFhxFFarKdgTm&q=${category}&limit=9`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => (
        {
            id,
            title,
            url: images.downsized_medium.url
        }));
    console.log(gifs)
    return gifs;
}

