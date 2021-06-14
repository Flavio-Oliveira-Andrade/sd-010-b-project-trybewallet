import { GET_API, GET_TOTAL, GET_DATA } from './index';
import getAPI from '../services/API';

export const actionTotal = (total = 0) => ({
  type: GET_TOTAL,
  payload: { expenses: [total] },
});

export const actionApi = (results) => ({
  type: GET_API,
  payload: results,
});

export const addData = (data) => ({
  type: GET_DATA,
  payload: data,
});

export const requestApi = () => async (dispatch) => {
  const result = await getAPI();
  const dale = Object.values(result).filter((e) => e.codein !== 'BRLT');
  dispatch(actionApi(dale));
};
