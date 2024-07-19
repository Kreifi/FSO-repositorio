import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  console.log('good määrä', good);
  const [neutral, setNeutral] = useState(0)
  console.log('neutral määrä', neutral)
  const [bad, setBad] = useState(0)
  console.log('bad määrä', bad)

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <button onClick={() => setGood(good + 1)}>
          good
          </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
          </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
          </button>
        </div>
        <div>
          <h1>statistics</h1>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
        </div>
    </div>
  )
}

export default App