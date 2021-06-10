export default function fetchApiSemAction() {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((res) => res.json())
    .then(
      (sucesso) => {
        const sucessoAux = sucesso;
        delete sucessoAux.USDT;
        console.log('sus', sucessoAux);
        return sucessoAux;
      },
    )
    .catch((erro) => erro);
}
