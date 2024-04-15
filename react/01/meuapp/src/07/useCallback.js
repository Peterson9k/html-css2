import React from 'react'
// Estudar sobre new Set
const set1 = new Set();
const set2 = new Set()

const Produto = () => {
  const func1 = () => {
    console.log('teste')
  }
  const func2 = React.useCallback(() => {
    console.log('teste')
  },[])

  set1.add(func1)
  set2.add(func2)
  console.log('set1', set1)
  console.log('set2', set2)

  return (
    <>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </>
  )
}

const useCallback = () => {
  const [cont,setContar] = React.useState(0);

  return (
    <>
    <Produto/>
      <button onClick={()=>setContar(cont+1)}>Contar</button>
      <p>{cont}</p>
    </>
  )
}

export default useCallback