import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount } from './store/counter';


function App() {
  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>The count is {count} </h1>
      <button onClick={() =>dispatch(increment())}>Increment</button>
      <button onClick={() =>dispatch(decrement())}>Decrement</button>
      <button onClick={() =>dispatch(incrementByAmount(22))}>Increment by 22</button>
    </div>
  );
}

export default App;


// for typescript
// // store
// interface CounterState {
//   value: number
// }

// interface UserState{
//   isSignedIn: boolean;
// }

// // Action
// const INCREMENTByAmount = {type:'INCREMENT', payload: 10};
// const DECREMENT = {type:'DECREMENT'};

// // Reducer