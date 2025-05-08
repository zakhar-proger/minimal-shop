export default async function fetchData({
  queryKey,
}: {
  queryKey: [string, string];
}) {
  const [, url] = queryKey;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network response was not ok");
  return res.json();
}
