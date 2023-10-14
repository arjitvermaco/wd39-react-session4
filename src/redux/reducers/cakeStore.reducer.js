import {
  BUY_VANILLA_CAKE,
  BUY_CHOCO_CAKE,
  BUY_PINEAPPLE_CAKE,
  ADD_CHOCO_CAKE,
  ADD_PINEAPPLE_CAKE,
  ADD_VANILLA_CAKE,
} from "../actionTypes";
const initialState = {
  vanillaCake: 10,
  chocoCake: 10,
  pineappleCake: 5,
};

export const cakeStoreReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BUY_VANILLA_CAKE:
      return {
        ...prevState,
        vanillaCake: prevState.vanillaCake - payload,
      };
    case BUY_PINEAPPLE_CAKE:
      return {
        ...prevState,
        pineappleCake: prevState.pineappleCake - payload,
      };
    case BUY_CHOCO_CAKE:
      return {
        ...prevState,
        chocoCake: prevState.chocoCake - payload,
      };
     default:
        return prevState
  }
};
