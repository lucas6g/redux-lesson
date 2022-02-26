import { useSelector } from "react-redux"
import { GlobalState } from "../store"

import { CartItem } from '../store/modules/cart/types'
import './Header.css'

export function Header() {
    const cartItems = useSelector<GlobalState, CartItem[]>(state => state.cart.items)

    return (

        <header>
            <div>
                nigga
            </div>
            <div>
                nigga
            </div>
            <div>
                nigga
            </div>
            <div>
                nigga
            </div>
        </header>
    )
}
