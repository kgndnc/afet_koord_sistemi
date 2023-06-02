import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'

import './App.css'

function App() {
  const [{ isAdmin }, dispatch] = useStateValue()

  return (
    <div className="App">
      <p>{isAdmin ? "You're admin" : 'regular user'}</p>
      <button
        onClick={() => {
          const actionType = isAdmin ? 'LOG_OUT' : 'LOG_IN'

          dispatch({ type: actionType })
        }}
        className="bg-fuchsia-700 p-2"
      >
        Click to {isAdmin ? 'log out' : 'log in'}
      </button>
      <nav className="mt-4 text-center">
        <ul className="space-y-2">
          <li>
            <Link to={'/'}>Anasayfa</Link>
          </li>
          <li>
            <Link to={'/adres-ihbar'}>Adres İhbar</Link>
          </li>
          <li>
            <Link to={'/login'}>Yönetici Girişi</Link>
          </li>

          <li>
            <Link to={'/bilgilendirme'}>Bilgilendirme</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
