import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../services/api";
import { GlobalState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { Product } from "../store/modules/cart/types";


function Catalog() {

    //buscando os produtos da api nao presiza de estado global
    const [catalog, setCatalog] = useState<Product[]>([])

    const failStockCheck = useSelector<GlobalState, number[]>((state) => state.cart.unavaibleProducts)

    const dispach = useDispatch()

    useEffect(() => {
        async function loadCatalog() {
            const response = await api.get('/products')

            setCatalog(response.data)
        }

        loadCatalog()

    }, [])

    function handleAddToCart(product: Product) {
        dispach(addProductToCartRequest(product))
    }



    return (
        <main>
            {catalog.map((product) => {
                return (
                    <div style={{ marginBottom: 16 }} key={product.id} >
                        <strong>{product.title}</strong>
                        <span>{product.price}</span>
                        <button onClick={() => handleAddToCart(product)}>Add</button>

                        {failStockCheck.includes(Number(product.id)) && <span style={{ color: 'red' }}>produto indisponivel</span>}
                    </div>
                )
            })}
        </main>
    );
}

export default Catalog
