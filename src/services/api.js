export async function getApiData() {
  const request = await fetch('https://economia.awesomeapi.com.br/json/all');
  const response = await request.json();
  return response;
}

export async function currencieFormat(format, currencie) {
  const request = await fetch(`https://economia.awesomeapi.com.br
  /${format}/${currencie}`);
  const response = await request.json();
  return response;
}
