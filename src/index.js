import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { createStore } from'redux';
import { Provider } from 'react-redux';
// import cartReducer from './reducer/cartReducer';
import store from "./store";

class Main extends PureComponent {
  render() {
    console.log('Store: ', store.getState());
    // const store = createStore(cartReducer,{});
    // console.log(store.getState);
    // store.subscribe(() => console.log(store.getState()))
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}



ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
