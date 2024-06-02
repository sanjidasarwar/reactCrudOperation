import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  const [info, setIno] = useState([])

  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('http://localhost:3000/data')
      const data =await response.json()
      setIno(data)
    }
    fetchData()
  }, [])
  
  console.log(info);
  return (
    <>
      <Table data={info} />
    </>
  )
}

export default App
