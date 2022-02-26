import { applyMiddleware, createStore } from 'redux'
import { CartState } from './modules/cart/types'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSaga from './modules/rootSaga'

export interface GlobalState {
    cart: CartState
}

const sagaMiddle = createSagaMiddleware()


const middlewares = [
    sagaMiddle
]

//estado global
const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

sagaMiddle.run(rootSaga)

export default store