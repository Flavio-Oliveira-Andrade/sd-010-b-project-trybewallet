const OPTIONS_METHOD = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const OPTIONS_TAG = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];

export const formsExpense = (statess, handle, curr) => [
  {
    name: 'value',
    id: 'value-input',
    textField: 'Valor:',
    type: 'number',
    handle,
    value: statess.value,
  },
  {
    name: 'description',
    id: 'description-input',
    type: 'text',
    textField: 'Descrição:',
    handle,
    value: statess.description,
  },
  {
    name: 'currency',
    id: 'currency-input',
    textField: 'Moeda:',
    options: curr,
    handle,
    value: statess.currency,
  },
  {
    name: 'method',
    id: 'method-input',
    textField: 'Método de Pagamento',
    options: OPTIONS_METHOD,
    handle,
    value: statess.method,
  },
  {
    name: 'tag',
    id: 'tag-input',
    textField: 'TAG:',
    options: OPTIONS_TAG,
    handle,
    value: statess.tag,
  },
];

export const dropDown = () => [
  {
    name: 'currency',
    id: 'header-currency-field',
    textField: '',
    options: ['BRL'],
    value: 'BRL',
    handle: () => false,
  },
];

export const formsLogin = (state, handle) => [
  {
    name: 'email',
    id: 'email-input',
    textField: 'Email:',
    value: state.email,
    handle,
    type: 'text',
  },
  {
    name: 'password',
    id: 'password-input',
    textField: 'Senha:',
    value: state.password,
    handle,
    type: 'password',
  },
];
