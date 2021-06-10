export async function getCurrencies() {
  const data = await fetch('https://economia.awesomeapi.com.br/json/all');
  const result = await data.json();
  return result;
}

// export const getCurrencies = async () => {
//   try {
//     const response = await fetch('https://economia.awesomeapi.com.br/json/all');
//     const currencies = await response.json();
//     return currencies;
//   } catch (error) {
//     return Error(error);
//   }
// };

export default getCurrencies;
