import createLoader from './createLoader';
import createMiddleware from './createMiddleware';
import reducer from './reducer';
import { LOAD, SAVE } from './constants';

export {
    LOAD, SAVE,
    createLoader,
    createMiddleware,
    reducer,
};

// The full default export is required to be BC with redux-storage <= v1.3.2
export default {
    LOAD, SAVE,
    createLoader,
    createMiddleware,
    reducer,
};
