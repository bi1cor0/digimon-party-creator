import { useState, useEffect } from 'react'

import DigiDisplay from './components/DigiDisplay'
import Form from './components/Form'

export default function App() {
  const [digimon, setDigimon] = useState(null)

  return (
      <>
        <div className='App'>
          <Form />
          <DigiDisplay />
        </div>
      </>
    )
  }

