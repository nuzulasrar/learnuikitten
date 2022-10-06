import { UPDATE_PROFILE } from "./actions";

const initialState = {
  profile: {
    ffname: "abcdef",
  },
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return { ...state.profile, ffname: action.payload };
    default:
      return state;
  }
}

export default profileReducer;
