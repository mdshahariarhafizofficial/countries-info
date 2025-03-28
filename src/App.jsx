import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const loadCountries = async ()=>{
  const res = await fetch('https://restcountries.com/v3.1/all')
  return res.json()
}

function App() {
  const countriesPromise = loadCountries();

  return (
    <>
      <h1>Countries info</h1>

      <Suspense fallback = {<h2>Countries Loading.....</h2>}>
        <Countries countries = {countriesPromise}></Countries>
      </Suspense>

    </>
  )
}

export default App
