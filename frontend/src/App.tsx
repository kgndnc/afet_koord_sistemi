import { Link, useNavigate } from 'react-router-dom'

import './App.css'
import AdminTag from './components/AdminTag'

function App() {
  const classNameForBtns =
    'inline-block w-60 rounded py-20 hover:opacity-80 hover:text-3xl duration-300 transition-all'

  return (
    <div className="App">
      <AdminTag />

      <h1 className="mb-12 mt-12 text-center font-serif text-3xl font-bold ">
        Afet Bilgilendirme ve Yardım Koordinasyon Sistemi
      </h1>
      <nav className="mx-auto mt-4 text-center font-sans text-lg">
        <div className="mx-auto flex w-3/4 max-w-xl flex-wrap justify-center gap-3 ">
          <Link className={`${classNameForBtns} bg-sky-400`} to={'/'}>
            Anasayfa
          </Link>

          <Link
            className={`${classNameForBtns} bg-red-400`}
            to={'/adres-ihbar'}
          >
            Adres İhbar
          </Link>

          <Link className={`${classNameForBtns} bg-slate-500 `} to={'/login'}>
            Yönetici Girişi
          </Link>

          {/* <Link to={import.meta.env.BASE_URL + 'bilgilendirme2.html'}>
              Bilgilendirme
            </Link> */}

          <a
            className={`${classNameForBtns} bg-lime-700`}
            href="/bilgilendirme2.html"
          >
            Bilgilendirme
          </a>

          <a
            className={`${classNameForBtns} self-end bg-indigo-400`}
            href="/gerekli_malzeme.html"
          >
            Gerekli Yardım Malzemeleri
          </a>
        </div>
      </nav>
    </div>
  )
}

export default App
