import React, { useEffect, useState } from 'react'

function UseLocaLStorage(value,initial) {
    const [local, setLocal] = useState( localStorage.getItem(value)?JSON.parse(localStorage.getItem(value)):initial)
    useEffect(() => {
 localStorage.setItem(value,JSON.stringify(local))
    }, [local])
    
  return [local,setLocal]
    
}

export default UseLocaLStorage