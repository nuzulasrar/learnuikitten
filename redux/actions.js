export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const updateProfile = (profile) => (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE,
    payload: profile,
  });
};
