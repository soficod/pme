import React, { useState, useEffect } from 'react';

interface Count {
    maxCount: number,
    speed: number
}

const Counter = ({maxCount, speed}:Count) => 
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
                setCount(count => count < maxCount ? count + 1 : count);
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