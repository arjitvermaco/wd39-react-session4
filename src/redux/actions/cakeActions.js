import {
    BUY_VANILLA_CAKE,
    BUY_CHOCO_CAKE,
    BUY_PINEAPPLE_CAKE,
    ADD_CHOCO_CAKE,
    ADD_PINEAPPLE_CAKE,
    ADD_VANILLA_CAKE,
  } from "../actionTypes";

export const buyVanillaCake = (number)=>{
    return{
      type:  BUY_VANILLA_CAKE,
      payload:number
    }
}

export const buyChocoCake = (number)=>{
  //DO processing here
    return{
      type:  BUY_CHOCO_CAKE,
      payload:number
    }
}

export const buyPineappleCake = (number)=>{
    return{
      type:  BUY_PINEAPPLE_CAKE,
      payload:number
    }
}