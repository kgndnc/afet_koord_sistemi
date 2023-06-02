import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from 'react-router-dom'

import Login from './pages/Login'
import Bilgilendirme from './pages/Bilgilendirme'
import AdresIhbar from './pages/AdresIhbar'
import React from 'react'

import reducer, { initialState } from './reducer.js'
import { StateProvider, useStateValue } from './StateProvider'

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
  // {
  //   path: '/bilgilendirme',
  //   element: <Bilgilendirme />,
  // },
  {
    path: '/adres-ihbar',
    element: <AdresIhbar />,
  },
])

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <RouterProvider router={router} />
    </StateProvider>
  </React.StrictMode>
)
