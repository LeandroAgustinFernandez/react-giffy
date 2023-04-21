export default async function getGifs(keyword, rating = 'g', page = 0,limit = 16) {
  console.log(page);
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIFFY_API}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;
  let res = await fetch(apiUrl);
  res = await res.json();
  const { data } = res;
  const gifs = data.map((image) => {
    const { images, title, id } = image;
    const { url } = images.downsized_medium;
    return { title, id, url };
  });
  return gifs;
}
