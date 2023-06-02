import { useState } from 'react'
import Userpage from '../components/AdresUserPage'
import AdresAdminPage from '../components/AdresAdminPage'

import { Helmet } from 'react-helmet'
import { useStateValue } from '../StateProvider'
import { useNavigate } from 'react-router-dom'
import AdminTag from '../components/AdminTag'

function AdresIhbar() {
  // const [isAdmin, setAdmin] = useState(true)

  const [{ isAdmin }, dispatch] = useStateValue()
  const navigate = useNavigate()

  return (
    <div className="font-sans">
      <AdminTag />
      <Helmet>
        <title>
          Adres İhbar Sayfası | Afet Bilgilendirme ve Koordinasyon Sistemi
        </title>
      </Helmet>

      {isAdmin ? <AdresAdminPage /> : <Userpage />}
    </div>
  )
}

export default AdresIhbar
