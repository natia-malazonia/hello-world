import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greeting from './Greeting'

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Greeting />} />
    <Route path="/hello/:userName" element={<Greeting />} />
  </Routes>
  </BrowserRouter>
}

export default App
