import React from 'react'
import { Route, Routes } from "react-router-dom";

import Homepage from './pages/Homepage.jsx'
import Report from './pages/Report.jsx'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Report" element={<Report />} />
    </Routes>
  )
}

export default App