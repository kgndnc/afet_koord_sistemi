import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'

import './App.css'
import AdminTag from './components/AdminTag'

function App() {
  const [{ isAdmin }, dispatch] = useStateValue()
  const navigate = useNavigate()

  console.log(import.meta.env.BASE_URL)

  return (
    <div className="App">
      <AdminTag />
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
            {/* <Link to={import.meta.env.BASE_URL + 'bilgilendirme2.html'}>
              Bilgilendirme
            </Link> */}

            <a href="/bilgilendirme2.html">Bilgilendirme</a>
          </li>
          <li>
            <a href="/gerekli_malzeme.html">Gerekli Yardım Malzemeleri</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default App
