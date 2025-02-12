import './App.css'
import { Routes, Route } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'

function App() {

  return (
    <>
      <Routes>
        <Route path="*" element={<AppRouter/>}/>
      </Routes>
      <div className="fixed right-[30px] bottom-[30px] z-50">
        <div className="bg-green-500 rounded-full size-15 flex pt-0.5 pl-0.5 
          justify-center items-center hover:cursor-pointer hover:scale-105" onClick={() => window.open('https://wa.me/59178824516', '_blank')}>
          <i className="bi bi-whatsapp text-white text-4xl"/>
        </div>
      </div>
    </>
  )
}

export default App
