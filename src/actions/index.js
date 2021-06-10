// Coloque aqui suas actions
export default function actionStore(value, type) {
  return {
    type: type.toUpperCase(),
    value,
  };
}
