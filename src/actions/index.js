// Coloque aqui suas actions
export default function actionUser(value, type) {
  return {
    type: type.toUpperCase(),
    value,
  };
}
