import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';

/** TODO: import REDUX **/
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

/** TODO: Add REDUCERS */

const count = (state = 0, action) => {
    console.log('Heyyyy I am a reducer!!!! ;)');

    if (action.type === 'INCREASE') {
      // the next value of store.count 
      // will be one more than its previous value
        return state + 1;
    } else if (action.type === 'DECREASE') {
      // the next value of store.count
      // will be one less than its previous value
        return state - 1;
    }
    // if action.type is anything other than INCREASE
    // then just return the last value of state
    return state;
}



const airlineList =(state = [], action) => {
    console.log('Airline List');
    if(action.type === 'ADD_ARILINE') {
        console.log(`action.payload is ${action.payload}`);

        return [...state, action.payload]
    }
    return state;
}




/** TODO: Create store */

const storeInstance = createStore(
    combineReducers(
        {
        count, // name of reducer
        airlineList
    
        }
    ),
    // tell Redux we want to use our new logger
    applyMiddleware(
        logger
    )
);



// Be sure to add the Provider! Just wrap App with it. Don't copy and paste from lecture, that will cause issues.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);