import { createStore } from 'redux';
import ProductReducer from './productReducer';

const ProductStore = createStore(
    ProductReducer
)

export default ProductStore