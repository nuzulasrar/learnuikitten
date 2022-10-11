import React, { useState, useEffect } from "react";
import { UPDATE_PROFILE, SUBMIT_UPDATE_PROFILE } from "./actions";
import axios from "axios";

const initialState = {
  temp_profile: {
    ffname: "abcdef",
  },
  profile: {
    var1: "werewr",
    var2: "kljlk",
  },
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        temp_profile: {
          ...state.temp_profile,
          [action.payload2]: action.payload,
        },
      };
    case SUBMIT_UPDATE_PROFILE:
      alert(action.payload.ffname);
      try {
        axios
          .post("http://rubysb.com/talentbook/api.php", {
            req: "b-realupdate",
            p1: JSON.parse(action.payload),
            p2: "ddef",
          })
          .then((res) => {
            alert(JSON.stringify(res.data));
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {}
      return { ...state, profile: action.payload };
    default:
      return state;
  }
}

export default profileReducer;
