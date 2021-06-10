// Coloque aqui suas actions

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const REQUISITION_API = 'REQUISITION_API';

export const saveEmailAction = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const requisitionAction = (api) => ({
  type: REQUISITION_API,
  api,
});

export const requisitionThunk = () => async (dispatch) => {
  try {
    const result = await fetch('https://economia.awesomeapi.com.br/json/all');
    const resultJson = await result.json();
    console.log(resultJson);
    return dispatch(requisitionAction(Object.keys(resultJson)));
  } catch (error) {
    console.log(error);
  }
};

// export const requisitionThunk = () => (dispatch) => fetch('https://economia.awesomeapi.com.br/json/all').then((response) => {
//   response.json().then((json) => dispatch(requisitionAction(json)));
// });
