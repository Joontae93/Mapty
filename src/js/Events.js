export async function getData(url, queryParams = '') {
  if (queryParams.length > 0) {
    url += queryParams;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}
