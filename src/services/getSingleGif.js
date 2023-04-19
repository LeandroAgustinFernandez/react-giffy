export default async function getSingleGifs(idgif) {
  const apiUrl = `https://api.giphy.com/v1/gifs/${idgif}?api_key=${process.env.REACT_APP_GIFFY_API}`;
  let res = await fetch(apiUrl);
  res = await res.json();
  const { data } = res;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;
  return { title, id, url };
}
