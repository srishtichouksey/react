import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; /* Provider is a react component that have only one purpose to provide store to its child component*/
import { ConfigureStore} from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
            <BrowserRouter>
            <div>
                <Main />
            </div>
            </BrowserRouter>
       </Provider>
    );
  }


  componentWillMount() {
      console.log('Hii I am First');
  }
}

export default App;
