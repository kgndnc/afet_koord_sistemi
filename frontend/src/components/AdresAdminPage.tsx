import axios from 'axios'

import { useEffect, useState } from 'react'

import { Address } from '../types/addressType'
import AdressBox from './AdressBox'

function AdresAdminPage() {
  const [addresses, setAddresses] = useState<Address[]>([])

  const getAddresses = () => {
    // Backend URL
    const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/'
    const endpoint = 'api/addresses'

    // make get request to backend
    axios
      .get(endpoint, { baseURL })
      .then(response => {
        // Data is in `response.data`
        setAddresses(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // First load, get addresses
  useEffect(() => {
    getAddresses()
  }, [])

  console.log(addresses)

  return (
    <>
      <div className="addresses mx-auto grid max-w-3xl grid-cols-2 gap-8">
        <div className="addresses_ulasilmadi border-2 ">
          <h3 className="my-4 text-center font-bold">Ulaşılmayan Adresler</h3>

          <div className="addresses_ulasilmadi_content grid gap-1 ">
            {addresses.length < 1 ? (
              <p>Adresler yüklenirken lütfen bekleyiniz</p>
            ) : (
              addresses
                .filter(val => val.ulasildi === false)
                .map(address => {
                  return (
                    <AdressBox
                      key={address._id}
                      {...address}
                      setAddresses={setAddresses}
                    />
                  )
                })
            )}
          </div>
        </div>

        <div className="addresses_ulasildi border-2">
          <h3 className="my-4 text-center font-bold">Ulaşılan Adresler</h3>

          <div className="addresses_ulasildi_content grid gap-1 ">
            {addresses.length < 1 ? (
              <p>Adresler yüklenirken lütfen bekleyiniz</p>
            ) : (
              addresses
                .filter(val => val.ulasildi === true)
                .map(address => {
                  return (
                    <AdressBox
                      key={address._id}
                      {...address}
                      setAddresses={setAddresses}
                    />
                  )
                })
            )}
          </div>
        </div>
        <dialog>Hello</dialog>
      </div>
    </>
  )
}

export default AdresAdminPage
