import { useState,useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);
    useEffect(()=>{
        console.log(count);
    },[count])

    const increment = () => {
        setCount(count => count + 1);
    }
    const decrement = () => {
        setCount(count => count - 1);
    }
    return { count,increment,decrement };
}

export default useCounter;