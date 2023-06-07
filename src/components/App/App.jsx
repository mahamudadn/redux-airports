import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AirLineForm from '../AirLineForm/AirLineForm';
import AirlineList from '../AirlineList/AirlineList';


function App() {


  const reduxStore = useSelector(store => store);

  const count = useSelector(store => store.count);
  
  
  const dispatch = useDispatch();
  return (
    <div>
      <AirLineForm/>
      <pre>{JSON.stringify(reduxStore)}</pre>
      <button onClick={() => dispatch({type:'INCREASE'})}>Increase</button>
      <button onClick={() => dispatch({type:'DECREASE'})}>Increase</button>
      <button onClick={() => dispatch({type:'ADD_ARILINE',payload:'Delta'})}>DELTA</button>
      <p>{reduxStore.count}</p>
    <p>reduxStore.count is {reduxStore.count}</p>
    <AirlineList/>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}







export default App;






