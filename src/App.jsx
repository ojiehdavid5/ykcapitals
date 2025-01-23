import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from "./components/Landing"

import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        

function App() {

  return (
    
        <PrimeReactProvider>



     <Landing/>
     </PrimeReactProvider>
    
  )
}

export default App
