export default async function getTrending() {
  const apiUrl = `https://api.giphy.com/v1/trending/searches?api_key=${process.env.REACT_APP_GIFFY_API}`;

  let res = await fetch(apiUrl);
  res = await res.json();
  return res.data;
}
