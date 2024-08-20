import { type FC, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface CounterProps {}

const Counter: FC<CounterProps> = () => {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  const increment = () => setCount(prevCount => prevCount + step);
  const decrement = () => setCount(prevCount => prevCount - step);
  const handleStepChange = (e) => setStep(Number(e.target.value))

  return (
    <div id="Counter">
      <h2>Count: {count}</h2>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <input type='number' value={step} onChange={handleStepChange} min="1" />
    </div>
  )
}

export default Counter;
