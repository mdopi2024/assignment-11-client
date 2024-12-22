import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
      <ToastContainer></ToastContainer>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
