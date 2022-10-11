export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const SUBMIT_UPDATE_PROFILE = "SUBMIT_UPDATE_PROFILE";

export const updateProfile = (temp_profile, key) => (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE,
    payload: temp_profile,
    payload2: key,
  });
};

export const submitUpdateProfile = (temp_profile) => (dispatch) => {
  dispatch({
    type: SUBMIT_UPDATE_PROFILE,
    payload: temp_profile,
  });
};
