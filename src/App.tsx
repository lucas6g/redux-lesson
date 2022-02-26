

import { Provider } from 'react-redux'
import Catalog from './components/Catalog';
import { Header } from './components/Header';

import store from './store'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Catalog />
    </Provider>
  );
}

export default App;
