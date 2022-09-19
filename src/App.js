
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
function App() {
  const value = useSelector((state) => state.counterReducer.value);  //takes the name of the reducer from store
  const dispatch = useDispatch();
const handleIncrement = ()=>{
  dispatch(increment())
}

const handleDecrement =()=>{
  dispatch(decrement())
}

console.log(value)

  return (
    <div className="App">
    <button className='add' onClick={handleIncrement}>+</button>
    <h1>{value}</h1>
    <button className='sub' onClick={handleDecrement} >-</button>
    </div>
  );
}

export default App;
