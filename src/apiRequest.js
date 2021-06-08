// end point https://economia.awesomeapi.com.br/json/all

const fetchCoinsApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
       const responseJson = await response.json();
       return responseJson;
     
}
// ja tenho o objeto!!
const responseOfAPiWallet = fetchCoinsApi();

export default responseOfAPiWallet;