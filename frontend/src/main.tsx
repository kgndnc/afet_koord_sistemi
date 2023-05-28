import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import { store } from './store'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './pages/Login'
import Bilgilendirme from './pages/Bilgilendirme'
import AdresIhbar from './pages/AdresIhbar'
import React from 'react'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/bilgilendirme',
    element: <Bilgilendirme />,
  },
  {
    path: '/adres-ihbar',
    element: <AdresIhbar />,
  },
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
