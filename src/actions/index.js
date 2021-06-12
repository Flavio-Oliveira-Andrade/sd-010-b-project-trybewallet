// Coloque aqui suas actions

// Departamento de relações exteriores
export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUISITION_API = 'REQUISITION_API';
export const REQUISITION_API_DESPESAS = 'REQUISITION_API_DESPESAS';
export const REQUISITION_API_SALVA_DESPESAS = 'REQUISITION_API_SALVA_DESPESAS';
// Ações da aplicação

// Ação que salva no e-mail
export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  email,
});

// Ação que faz requisição para API para salvar nos inputs de moeda
export const requisitionAction = (api) => ({
  type: REQUISITION_API,
  api,
});

// Ação que faz requisição para API para salvar as despesas
export const requisitionDespesasAction = (despesas) => ({
  type: REQUISITION_API_DESPESAS,
  despesas,
});

// Ação que salva despesas
export const requisitionSalvaDespesasAction = (salvaDespesas) => ({
  type: REQUISITION_API_SALVA_DESPESAS,
  salvaDespesas,
});

// Funções de Thunk: traduzindo assincronicidade

// Thunk que faz requisição para API para salvar nos inputs de moeda
export const requisitionThunk = () => async (dispatch) => {
  try {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultJson = await result.json();
    // console.log(resultJson);
    return dispatch(requisitionAction(Object.keys(resultJson)));
  } catch (error) {
    console.log(error);
  }
};

// Thunk que faz requisição para API para salvar as despesas
export const requisitionThunkDespesas = () => async (dispatch) => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const resultJson = await result.json();
  // console.log(resultJson);
  return dispatch(requisitionDespesasAction(resultJson));
};
