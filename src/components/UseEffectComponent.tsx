import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
       const timer = window.setInterval(() => {
            setValue(value + 1)
        }, 1000);
        return () => window.clearInterval(timer)
        
    }, [value])
    return (
        <div>
            <h2>
            useEffect
            </h2>
            <div>
                {
                    value
                }
            </div>
            <hr />
        </div>
    )
}
export default UseEffectComponent
