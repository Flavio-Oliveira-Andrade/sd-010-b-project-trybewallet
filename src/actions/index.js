import fetchInformation from '../services';

export const redirectCarteira = (email) => ({
  type: 'redirect-carteira',
  payload: {
    email,
  },
});

export const requestFetchSuccess = (resolve) => ({
  type: 'request-success',
  payload: {
    currencies: resolve,
  },
});

export const requestFetchError = (reject) => ({
  type: 'request-error',
  payload: { reject },
});

export const fetchOnComponentDidMount = () => (dispatch) => {
  fetchInformation()
    .then((response) => {
      dispatch(requestFetchSuccess(response));
    })
    .catch((error) => dispatch(requestFetchError(error)));
};
