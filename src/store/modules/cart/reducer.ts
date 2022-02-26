import { Reducer } from "redux"
import { CartState } from "./types"
import produce from 'immer'
import { ActionsTypes } from './types'
const INITIAL_STATE: CartState = {
    items: [],
    unavaibleProducts: []
}

//state e o estado atual 
export const cart: Reducer<CartState> = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ActionsTypes.addProductToCartSuccess: {
            const { product } = action.payload

            //todas as regras devem ficar no redulcer

            //sem o cooceito da imutabilidade
            return produce(state, (rescunho) => {

                const productIndex = state.items.findIndex((item) => {
                    return item.product.id === product.id
                })

                if (productIndex !== -1) {
                    rescunho.items[productIndex].quantity += 1
                } else {

                    rescunho.items.push({
                        product,
                        quantity: 1
                    })

                }
            })

            //     return {
            //         ...state, //returnar tambem o estado atual 
            //         items: [
            //             ...state.items,
            //             {
            //                 product,
            //                 quantity: 1
            //             }
            //         ]
            //     }

        }

        case ActionsTypes.addProductToCartFail: {
            return produce(state, (rascunho) => {//funcao rasculho cria uma copia do estado 
                rascunho.unavaibleProducts.push(action.payload.productId)
            })
        }


        default: {
            return state
        }


    }


}

