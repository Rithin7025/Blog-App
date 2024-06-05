import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import './index.css'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import CreateBlogPage from './pages/CreateBlogPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='about' element={<AboutPage/>} />
      <Route path='createBlog' element={<CreateBlogPage/>} />
      
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
