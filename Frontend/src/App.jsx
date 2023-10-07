import React from 'react'
import { Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default App