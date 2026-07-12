import { useState } from "react";

export default function Counter() {
    const [counter, setcounter] = useState(0)

    return (
        <>
            <h2>{counter}</h2>
            <button onClick={() => setcounter(counter+1)}>Increment</button>
            <button onClick={() => setcounter(counter-1)}>Decrement</button>
        </>
    )
}

