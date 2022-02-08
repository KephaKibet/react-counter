import { useState } from 'react'
import './stepper.css'


function Stepper() {

  const [count, setCount] = useState(0)
  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }

    return (
      <div className='stepper'>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
      </div>
    )
  }


export default Stepper