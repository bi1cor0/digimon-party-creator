import { useState, useEffect } from 'react'

import DigiDisplay from './components/DigiDisplay'
import Form from './components/Form'

export default function App() {
  const [digimon, setDigimon] = useState(null)

    // Function to get Digimon names
    const getDigimon = async(searchTerm) => {
      // Make fetch request and store the response
      const response = await fetch(
        `https://digi-api.com/api/v1/digimon/${searchTerm}`
      );
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setDigimon(data);
    };

  return (
      <>
        <div className='App'>
          <Form digisearch={getDigimon}/>
          <DigiDisplay digimon={digimon}/>
        </div>
      </>
    )
  }

