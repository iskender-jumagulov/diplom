import * as actions from "./actions";

const initialState = {
  subjects: {
    camera: 0,
    flashlight: 0,
    water: 0,
    medicinechest: 0,
    tent: 0,
    flashlight: 0,
  },
  price: 80,
};

const PRICES = {
  camera: 2000,
  flashlight: 55,
  water: 45,
  medicinechest: 200,
  tent: 400,
  flashlight: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_FLOWERS:
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: state.subjects[action.subject] + 1,
        },
        price: state.price + PRICES[action.subject],
      };

    case actions.REMOVE_SUBJECTS:
      return {
        ...state,
        subjects: {
          ...state.subjects,
          [action.subject]: state.subjects[action.subject] - 1,
        },

        price: state.price - PRICES[action.subject],
      };

    default:
      return state;
  }
};
