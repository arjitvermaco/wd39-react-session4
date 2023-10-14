
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {buyVanillaCake,buyChocoCake,buyPineappleCake} from './redux/actions/cakeActions'
 import BuyVanillaButton from './BuyVanillaButton.js';
function App() {
  const cakes = useSelector((state)=>state.cake)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <p>Vanilla Cakes In Store : {cakes.vanillaCake}</p>
      <p>Pineapple Cakes In Store : {cakes.pineappleCake}</p>
      <p>Choco Cakes In Store : {cakes.chocoCake}</p>

      {/* <button onClick={()=>{dispatch(buyVanillaCake(1))}}>Buy Vanilla Cake</button> */}
      <BuyVanillaButton qty={1}/>
      <button onClick={()=>{dispatch(buyChocoCake(1))}}>Buy Choco Cake</button>
      <button onClick={()=>{dispatch(buyPineappleCake(3))}}>Buy PineApple Cake</button>
    </div>
  );
}

export default App;
