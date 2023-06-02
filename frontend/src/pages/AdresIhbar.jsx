import { useState } from 'react'
import Userpage from '../components/AdresUserPage'
import AdresAdminPage from '../components/AdresAdminPage'

import { Helmet } from 'react-helmet'
import { useStateValue } from '../StateProvider'

function AdresIhbar() {
  // const [isAdmin, setAdmin] = useState(true)

  const [{ isAdmin }, dispatch] = useStateValue()

  return (
    <div className="font-sans">
      <Helmet>
        <title>
          Adres İhbar Sayfası | Afet Bilgilendirme ve Koordinasyon Sistemi
        </title>
      </Helmet>

      {isAdmin ? <AdresAdminPage /> : <Userpage />}

      <div className="mx-auto max-w-3xl">
        <button
          className="mb-2 mt-4 block rounded bg-red-700 p-2"
          onClick={() => {
            setAdmin(v => !v)
          }}
        >
          Click here to {isAdmin ? 'logout' : 'login as admin'}
        </button>
      </div>
    </div>
  )
}

export default AdresIhbar
