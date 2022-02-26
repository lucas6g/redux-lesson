
import { AxiosResponse } from 'axios'
import { all, takeLatest, select, call, put } from 'redux-saga/effects'
import { GlobalState } from '../..'
import { api } from '../../../services/api'
import { addProductToCartFail, addProductToCartRequest, addProductToCartSeccsess } from './actions'
import { ActionsTypes } from './types'

interface StockResponse {
    id: number
    quantity: number

}

type CheckProductStokReq = ReturnType<typeof addProductToCartRequest>


//funcao de midleware
function* checkProductInStok({ payload }: CheckProductStokReq) {

    const { product } = payload

    //pegando do estado pegando dados do meu estado
    const currentQuantity: number = yield select((state: GlobalState) => {
        return state.cart.items.find((item) => {
            return item.product.id === product.id
        })?.quantity || 0
    })

    const stokeResponse: AxiosResponse<StockResponse> = yield call(api.get, '/stock/' + product.id)

    if (stokeResponse.data.quantity > currentQuantity) {
        yield put(addProductToCartSeccsess(product))

    } else {
        yield put(addProductToCartFail(Number(product.id)))

    }

}

//taque latest pega a ultima vez que action foi executada 
export default all([
    takeLatest(ActionsTypes.addProductToCartRequest, checkProductInStok)
])