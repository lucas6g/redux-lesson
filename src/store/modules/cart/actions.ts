import { Product } from "./types";

export function addProductToCartRequest(product: Product) {
    return {
        type: 'ADD_PRODUCT_TO_CART_REQUEST',
        payload: { //informacao adicional que eu quero usar para passar no carrinho
            product
        }
    }
}
export function addProductToCartSeccsess(product: Product) {
    return {
        type: 'ADD_PRODUCT_TO_CART_SUCCESS',
        payload: { //informacao adicional que eu quero usar para passar no carrinho
            product
        }
    }
}
export function addProductToCartFail(productId: number) {
    return {
        type: 'ADD_PRODUCT_TO_CART_FAIL',
        payload: { //informacao adicional que eu quero usar para passar no carrinho
            productId
        }
    }
}