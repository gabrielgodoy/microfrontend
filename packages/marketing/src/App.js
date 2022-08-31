import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/pricing" element={<Pricing />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
