import React, { useEffect, useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(handleCounter(),
      1000)
  }, [])

  const CounterStyle = {
    backgroundColor: "red",
    color: "green"

  }

  const handleCounter = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }
  const handleReset = () => {
    setCounter(0);
  }

  return (
    <div>
      <h2 style={CounterStyle}> I am Counter- {counter}</h2>
      <button onClick={handleCounter}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Counter





