import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'

export const fetchProducts = async () => {
    const URL = 'https://dummyjson.com/products';
    const resp = await axios.get(URL)
    const data = await resp.data
    console.log("DATA:: ",data)
    return data;
}

export const useQueryProducts = () => {
  return useQuery({queryKey:['products'],queryFn:fetchProducts})
}