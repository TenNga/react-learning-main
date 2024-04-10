'use client';

import { useRouter } from "next/navigation"

function OrderProduct () {
    const router = useRouter();
    const handleOrderPlace = () => {

        router.replace('/'); //avoid going back to place order page after order placed
    }
    return(
        <div>
            <h1>Order Product Page</h1>
            <button onClick={handleOrderPlace}>Place Order</button>
        </div>
    )
};

export default OrderProduct;