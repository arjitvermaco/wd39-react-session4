import React from 'react'
import { useDispatch } from 'react-redux'
import {buyVanillaCake} from './redux/actions/cakeActions'
export default function BuyVanillaButton({qty}) {
    const dispatch = useDispatch();

  return (
    <div>
        <button onClick={()=>{dispatch(buyVanillaCake(qty))}}>Buy Vanila Cake</button>
    </div>
  )
}
