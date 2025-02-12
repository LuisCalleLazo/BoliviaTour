import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<AppRouter/>}/>
      </Routes>
    </>
  )
}

export default App
