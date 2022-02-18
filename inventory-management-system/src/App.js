
import './App.css';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import ProductStore from './productRedux/productStore'


function App() {
  return (
    <Provider store={ProductStore}>
    <BrowserRouter>
      <div>
       <Header />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App
