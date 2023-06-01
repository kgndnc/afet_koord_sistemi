import { Dispatch, SetStateAction } from 'react'
import { Address } from '../types/addressType'
import axios from 'axios'

interface AddressBoxProps extends Address {
  setAddresses: Dispatch<SetStateAction<Address[]>>
}

function AdressBox({
  _id,
  il,
  ilce,
  mahalle,
  'sokak/cadde': sokakCadde,
  ulasildi,
  no,
  ek_aciklamalar,
  setAddresses,
}: AddressBoxProps) {
  // Change state and send PUT request to backend
  const handleClick = async (id: string) => {
    let newValue

    setAddresses(oldData =>
      oldData.map(val =>
        val._id === id ? { ...val, ulasildi: !val.ulasildi } : val
      )
    )

    // Backend URL
    const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/'
    const endpoint = `api/addresses/${id}`

    // make PUT request to backend (update item)

    const data = {
      il,
      ilce,
      mahalle,
      'sokak/cadde': sokakCadde,
      ulasildi: !ulasildi,
      no,
      ek_aciklamalar,
    }

    axios
      .put(endpoint, data, {
        baseURL,
        withCredentials: false,
        method: 'PUT',
      })
      .then(response => {
        // Data is in `response.data`
        alert(JSON.stringify(response.data))
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="bg-gray-300 p-4">
      <p>
        Mahalle: <strong>{mahalle} Mah.</strong>
      </p>
      <p>
        Sokak/Cadde: <strong>{sokakCadde}</strong>
      </p>
      <p>
        No: <strong>{no}</strong>
      </p>
      <p>
        <strong>{`${ilce} / ${il.toUpperCase()}`}</strong>
      </p>
      <small>{ek_aciklamalar}</small>

      <button
        className={`float-right rounded-md p-2 shadow-md hover:opacity-80  ${
          ulasildi ? 'bg-red-600' : 'bg-green-600'
        }`}
        onClick={() => {
          handleClick(_id)
        }}
      >
        {!ulasildi ? 'Ulaşıldı' : 'Ulaşılmadı'}
      </button>
    </div>
  )
}

export default AdressBox
