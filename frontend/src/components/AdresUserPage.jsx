import { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'

import axios from 'axios'

function Userpage() {
  const [formData, setFormData] = useState({
    il: '',
    ilce: '',
    mahalle: '',
    'sokak/cadde': '',
    no: '',
    ek_aciklamalar: '',
  })

  const isFormValid = useCallback(
    () =>
      !!(
        formData.il &&
        formData.ilce &&
        formData.mahalle &&
        formData['sokak/cadde'] &&
        formData.no
      )
  )

  const handleFormChange = event => {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }
  const handleFormSubmit = event => {
    event.preventDefault()

    // Backend URL
    const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/'
    const endpoint = 'api/addresses'

    // TODO: (zaman kalırsa yap) eksik kutucukları kırmızı yap

    // TODO: Adres daha önce gönderildiyse belirt

    if (!isFormValid()) {
      alert('Lütfen boş alanları doldurun.')
      return
    }

    // make post request to backend
    axios
      .post(endpoint, { address: formData }, { baseURL })
      .then(response => {
        if (import.meta.env.DEV) {
          console.log(
            "POST request sent...\nHere's the response back from server:"
          )
          console.log(response)
        }
      })
      .catch(error => {
        if (import.meta.env.DEV) console.log(error)
      })

    console.log('Form submitted')

    // Clear form
    setFormData({
      il: '',
      ilce: '',
      mahalle: '',
      'sokak/cadde': '',
      no: '',
      ek_aciklamalar: '',
    })

    alert('Adres başarıyla kaydedildi.')
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mb-8 mt-16 place-self-auto text-2xl">Adres İhbar Formu</h2>
      <form
        className="grid max-w-lg grid-cols-[1fr_3fr] gap-2"
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      >
        <div className="labels grid grid-flow-row items-center justify-items-end gap-3">
          <label htmlFor="il">İl:</label>
          <label htmlFor="ilce">İlçe:</label>
          <label htmlFor="mahalle">Mahalle:</label>
          <label htmlFor="sokak/cadde">Sokak/Cadde:</label>
          <label htmlFor="no">No:</label>
          <label htmlFor="ek_aciklamalar">Ek Açıklamalar:</label>
        </div>

        <div className="inputs grid grid-flow-row gap-3">
          <input
            type="text"
            className=""
            name="il"
            id="il"
            value={formData.il}
          />

          <input
            type="text"
            className=""
            name="ilce"
            id="ilce"
            value={formData.ilce}
          />

          <input
            type="text"
            className=""
            name="mahalle"
            id="mahalle"
            value={formData.mahalle}
          />

          <input
            type="text"
            className=""
            name="sokak/cadde"
            id="sokak/cadde"
            value={formData['sokak/cadde']}
          />

          <input
            type="text"
            className=""
            name="no"
            id="no"
            value={formData.no}
          />

          <input
            type="text"
            className=""
            name="ek_aciklamalar"
            id="ek_aciklamalar"
            value={formData['ek_aciklamalar']}
          />
        </div>

        <input
          className="col-span-2 mt-3 w-36 place-self-center rounded bg-blue-400 p-2 text-sm hover:bg-blue-300"
          type="submit"
          value="Gönder"
        ></input>
      </form>
    </div>
  )
}

export default Userpage
