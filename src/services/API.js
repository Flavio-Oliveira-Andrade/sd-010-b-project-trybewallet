import axios from 'axios';

const apiUrl = 'https://economia.awesomeapi.com.br/json/all';

export default async function fetchCurrency() {
  await axios.get(apiUrl)
    .then((response) => {
      const res = response.data;
      delete res.USDT;
      console.log(res);
      return res;
    });
}
