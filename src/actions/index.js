// import cambioAPI from '../services/cambioAPI';

// export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
// export const REQUEST_CAMBIO_SUCCESS = 'REQUEST_CAMBIO_SUCCESS';
// export const REQUEST_CAMBIO_ERROR = 'REQUEST_CAMBIO_ERROR';

export const LOGIN = 'LOGIN';
export const CAMBIO_GET_ALL = 'CAMBIO_GET_ALL';

export function login(email, password) {
  return {
    type: LOGIN,
    payload: {
      email,
      password,
    },
  };
}

// export const requestISSLocationSuccess = ({ iss_position }) => ({ // eslint-disable-line
//   type: REQUEST_CAMBIO_SUCCESS,
//   payload: {
//     latitude: iss_position.latitude,
//     longitude: iss_position.longitude,
//     isFetching: false,
//   },
// });

// export const requestCambioError = (error) => ({
//   type: REQUEST_CAMBIO_ERROR,
//   payload: { error, isFetching: false },
// });

// export const fetchISSLocation = () => (dispatch) => {
//   dispatch(requestISSLocation());
//   cambioAPI()
//     .then((issLocationResponse) => dispatch(
//       requestISSLocationSuccess(issLocationResponse),
//     ))
//     .catch((issLocationError) => dispatch(
//       requestCambioError(issLocationError),
//     ));
// };
