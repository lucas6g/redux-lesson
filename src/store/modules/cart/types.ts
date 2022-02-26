export interface Product {
    id: string
    title: string
    price: number
}

export enum ActionsTypes {
    addProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
    addProductToCartSuccess = 'ADD_PRODUCT_TO_CART_SUCCESS',
    addProductToCartFail = 'ADD_PRODUCT_TO_CART_FAIL'

}

export interface CartItem {
    product: Product
    quantity: number
}


export interface CartState {
    items: CartItem[]
    unavaibleProducts: number[]
}