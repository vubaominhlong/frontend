const ADD_ROLE = "ADD_ROLE";
function add_role() {
    return {
        type: ADD_ROLE
    }
}

const REMOVE_ROLE = "REMOVE_ROLE";
function remove_role() {
    return {
        type: REMOVE_ROLE
    }
}

function roleReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_ROLE:
        return {
          ...state,
          noOfRole: state.noOfRole + 1
        };
      case REMOVE_ROLE:
        return {
          ...state,
          noOfRole: state.noOfRole - 1
        };
      default:
        return state;
    }
  }
  