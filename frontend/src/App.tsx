import { Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
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
