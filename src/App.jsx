import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'; //importing methods from react-router-dom
import DigiDisplay from './components/DigiDisplay'
import Form from './components/Form'
import ErrorPage from './pages/ErrorPage';

export default function App() {
  const [digimon, setDigimon] = useState(null)
  const navigate = useNavigate() //calling the useNavigate method for when a button is pushed, or an error is thrown.

    // Function to get Digimon names
    const getDigimon = async(searchTerm) => {
      try {
        // Make fetch request and store the response
        const response = await fetch(
          `https://digi-api.com/api/v1/digimon/${searchTerm}`
        );
        if (!response.ok){ //if statement that checks to see if the response was successful and sends out a boolean to show if it was or not. 
          throw new Error('Digimon not found') //throws out a new error if response.ok is false. 
        }
        // Parse JSON response into a JavaScript object
        const data = await response.json();
        // Set the Movie state to the received data
        setDigimon(data);
      } catch(e){ //catch statement for the error handling. 
        console.error(e);
        navigate('/error' , { state: {message: e.message}}) //having the user go to the error page using the useNavigate function and passing through an object prop that details the message. 
      }
    }

  return (
      <>
      <Routes>
        <Route path="/" element={
        <div>
          <Form digisearch={getDigimon}/>
          <DigiDisplay digimon={digimon}/> 
        </div>
        } />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      </>
    )
  }

