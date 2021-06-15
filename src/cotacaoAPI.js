const fetchApiFunction = () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const data = fetch(url).then((response) => response.json());

  return data;
};

export default fetchApiFunction;
