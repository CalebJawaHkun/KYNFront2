import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router.jsx'
import { AuthProvider } from './comps/contexts/AuthContext.jsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router}/>
      <Toaster/>
    </AuthProvider>
)
