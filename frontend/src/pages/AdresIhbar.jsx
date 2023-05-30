import { useState } from 'react'
import Userpage from '../components/AdresUserPage'

function AdresIhbar() {
  const [isAdmin] = useState(false)

  return <> {isAdmin ? <p>You're admin</p> : <Userpage />}</>
}

export default AdresIhbar
