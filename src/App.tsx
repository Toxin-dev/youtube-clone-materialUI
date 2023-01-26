import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import {Navbar, ChannelDetails, Feed, SearchFeed, VideoDetail} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
        <Box sx={{backgroundColor: "#000"}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<Feed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetails />} />
            <Route path='/search/:id' element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  )
}

export default App
