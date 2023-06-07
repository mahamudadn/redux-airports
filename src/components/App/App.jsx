import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {


  const reduxStore = useSelector(store => store);

  const count = useSelector(store => store.count);
  
  
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button>Add Airline</button>

      <pre>{JSON.stringify(reduxStore)}</pre>
      <button onClick={() => dispatch({type:'INCREASE'})}>Increase</button>
      <button onClick={() => dispatch({type:'DECREASE'})}>Increase</button>
      <p>{count}</p>
    <p>reduxStore.count is {reduxStore.count}</p>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}







export default App;






