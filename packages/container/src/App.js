import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}
