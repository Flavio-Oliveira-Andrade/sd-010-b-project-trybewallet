import fetchAPI from '../services/serviceAPI';
import walletAction from './walletAction';

export const RESPONSE = 'response';

const responseAction = () => async (dispatch) => {
  const currencies = await fetchAPI();
  delete currencies.USDT;
  return dispatch(walletAction(currencies));
};

export default responseAction;
