import { useEffect, useState } from 'react'
import './App.css'
import Table from './components/Table'
import useFetchData from './hooks/useFetchData'

function App() {
  const {data, error, loading} =useFetchData('http://localhost:3000/data')
  return (
    <>
      {loading && <h1>Loading....</h1>}
      {!loading && error && <h1>{error}</h1>}
      {!loading && !error && data && <Table data={data} />}
    </>
  )
}

export default App
