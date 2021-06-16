const getCurrencies = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jsonResp = await response.json();
  return jsonResp;
};

export default getCurrencies;
