import axios from "axios";

const initialState = {};

const GET_TRANSACTION = "GET_TRANSACTION";

const getTransaction = information => ({
  type: GET_TRANSACTION,
  information
});

// get transaction from api
export const fetchTransactions = () => dispatch => {
  return axios
    .post("api/transactions")
    .then(res => {
        console.log('posted', res.data)
        dispatch(getTransaction(res.data));
    })
    .catch(err => console.error(err));
};

export default function transactions(state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTION:
      return action.information;
    default:
      return state;
  }
}