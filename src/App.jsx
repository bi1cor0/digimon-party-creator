import { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'; //importing methods from react-router-dom
import DigiDisplay from './components/DigiDisplay'
import Form from './components/Form'
import ErrorPage from './pages/ErrorPage';
import './styles.css'


function randomIntFromInterval(min, max) { // incorporating random number generator to use in the use state below. 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function App() {

  
  //Use States:
  const [digimon, setDigimon] = useState(null) //setting state for the Digimon that is about to be collected. 
  //const [digimonList, setDigimonList] = useState([]) //setting state for the Digimon generated list. 

  //calling the useNavigate method for when a button is pushed, or an error is thrown.
  const navigate = useNavigate() 
  
    // Function to get Digimon names
    const getDigimon = async(searchTerm) => {
      try {
        // Make fetch request and store the response
        const response = await fetch(
          `https://digi-api.com/api/v1/digimon/${searchTerm}`
        ); //response to the DAPI. 
        if (!response.ok){ //if statement that checks to see if the response was successful and sends out a boolean to show if it was or not. 
          throw new Error('Digimon not found') //throws out a new error if response.ok is false. 
        }
        // Parse JSON response into a JavaScript object
        const data = await response.json();
        // Set the Movie state to the received data
        setDigimon(data);
      } catch(e){ //catch statement for the error handling. 
        console.error(e);
        navigate('/error') //having the user go to the error page using the useNavigate function. 
      }
    }

        //Setting up Use state to render a random Digimon during render. 
        useEffect(() => {
        const random = randomIntFromInterval(1, 1460)
        getDigimon(random)
        }, [])

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

