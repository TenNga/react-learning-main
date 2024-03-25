import React, { useContext } from "react";
import ShopContext from "../contexts/ShopList";

export const useListContext = () => {
    return useContext(ShopContext)
};


