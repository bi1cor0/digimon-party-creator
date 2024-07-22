import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
    <h1>Seems like an error occured!</h1>
    <h2>Make sure to enter a number from 1 to 1,460 with no commas. Or enter in a proper Digimon name from the list generated.</h2>
    </>
  )
}

