import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/');
    };
  return (
    <>
    <h1>Seems like an error occured!</h1>
    <h2>Make sure to enter a number from 1 to 1,460 with no commas. Or enter in a proper Digimon name from the list generated.</h2>
    <button onClick={btnBack}>Back to the Search Page</button>
    </>
  )
}

