import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Show from './pages/Show.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/show/:id",
    element:<Show />
  },
  {
    path:"*",
    element:<h1>404 Page Not Found</h1>

  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)
