import { GET_API, GET_TOTAL, GET_DATA } from './index';
import getAPI from '../services/API';

// action p/ soma das despesas
export const actionTotal = (total = 0) => ({
  type: GET_TOTAL,
  payload: { expenses: [total] },
});

// action creator p/ requisição do thunk
export const actionApi = (results) => ({
  type: GET_API,
  payload: results,
});

// action p/ requisição da api completa
export const addData = (data) => ({
  type: GET_DATA,
  payload: data,
});

// thunk com filtro p/ fazer o select de moedas
export const requestApi = () => async (dispatch) => {
  const result = await getAPI();
  const currencies = Object.values(result).filter((e) => e.codein !== 'BRLT');
  return dispatch(actionApi(currencies));
};
