const ADD_USER = "ADD_USER";
function add_user() {
    return {
        type: ADD_USER
    }
}
const REMOVE_USER = "REMOVE_USER";
function remove_user() {
    return {
        type: REMOVE_USER
    }
}

function userReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          noOfUser: state.noOfUser + 1
        };
      case REMOVE_USER:
        return {
          ...state,
          noOfUser: state.noOfUser - 1
        };
      default:
        return state;
    }
  }