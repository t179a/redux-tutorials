
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function Counter(){
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(prevCounter => prevCounter + 1)
  }

  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)
