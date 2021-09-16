import React, { useState, useEffect } from 'react';

interface Count {
    maxCount: number,
    speed: number
    iter: number
}

const Counter = ({maxCount, speed, iter}:Count) => 
{
    const [count, setCount] = useState(0);

    useEffect(() => 
    {
        let intervale = setInterval(() => 
        {
            if(count > maxCount)
            {
                console.log("STOP!!");
                clearInterval(intervale);
            }
            else 
            {
                setCount(count => count < maxCount ? count + iter : count);
            }
        }, speed);
    }, []);

    return(
        <>
            {count}
        </>
    )
}

export default Counter;