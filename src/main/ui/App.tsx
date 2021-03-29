import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from '../bll/store';
import { Main } from '../Main';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <>
        <HashRouter>
          <Provider store={store}>
            <Main />
          </Provider>
        </HashRouter>
      </>
    </div>
  );
}

export default App;
