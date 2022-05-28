const FetchWiki = async (search) => {
  const url = `https://pt.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${search}`;

  const promise = await fetch(url);
  const data = await promise.json();
  const route = Object.keys(data.query.pages)[0];

  const final = data.query.pages[route].extract;
  return final;
};

export default FetchWiki;
