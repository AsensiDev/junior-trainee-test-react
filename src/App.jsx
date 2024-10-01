import React from 'react'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import './App.css'

export default function App() {

  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
    
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
        <h1>app de gatitos</h1>
        <button onClick={handleClick}>Random Cat</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words of ${fact}`} />}
    </main>
  )
}
