import { useState } from 'react';


function Count() {
    let [ count, setCount ] = useState(0);  
    return (
      <h1 onClick={() => setCount(count +=1)}>{count}</h1>
    )
  }

export default Count;
