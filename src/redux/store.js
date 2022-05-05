import {createStore} from'redux';
import rootReducer from './reducer/indux';

const store = createStore(rootReducer);

export default store;