'use client';
import { useState } from "react";

function Revenues() {
    const [loading,setLoading] = useState(true);

    const renderLoading = ()=>setTimeout(() => {
        setLoading(false);
    }, 2000);

    renderLoading();
    return(
        <div>
            {loading? <h1>Loading...</h1> : <h1>Revenue section</h1>}
        </div>
    )
};

export default Revenues;