const BASE_URL = "https://dummyjson.com";

export async function fetchData(type, limit, skip) {
  const url =
    type === "quotes"
      ? `${BASE_URL}/quotes?limit=${limit}&skip=${skip}`
      : `${BASE_URL}/todos?limit=${limit}&skip=${skip}`;

  const response = await fetch(url);
  const data = await response.json();

  return {
    total: data.total,
    items: data[type],
  };
}
