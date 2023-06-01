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

  // const isFormValid = () =>
  //   !!(
  //     formData.il &&
  //     formData.ilce &&
  //     formData.mahalle &&
  //     formData['sokak/cadde'] &&
  //     formData.no
  //   )

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
    const baseURL = 'http://localhost:5000/'
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
        if (process.env.NODE_ENV === 'development') {
          console.log(
            "POST request sent...\nHere's the response back from server:"
          )
          console.log(response)
        }
      })
      .catch(error => {
        if (process.env.NODE_ENV === 'development') console.log(error)
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
  }

  return (
    <div className="mx-auto flex flex-col items-center">
      <h2>Adres İhbar Formu</h2>
      <form
        className="flex max-w-md flex-col gap-3 border-2"
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="il">
          İl:
          <input
            type="text"
            className=""
            name="il"
            id="il"
            value={formData.il}
            readOnly
          />
        </label>

        <label htmlFor="ilce">
          İlçe:
          <input
            type="text"
            className=""
            name="ilce"
            id="ilce"
            value={formData.ilce}
            readOnly
          />
        </label>
        <label htmlFor="mahalle">
          Mahalle:
          <input
            type="text"
            className=""
            name="mahalle"
            id="mahalle"
            value={formData.mahalle}
            readOnly
          />
        </label>
        <label htmlFor="sokak/cadde">
          Sokak/Cadde:
          <input
            type="text"
            className=""
            name="sokak/cadde"
            id="sokak/cadde"
            value={formData['sokak/cadde']}
            readOnly
          />
        </label>
        <label htmlFor="no">
          No:
          <input
            type="text"
            className=""
            name="no"
            id="no"
            value={formData.no}
            readOnly
          />
        </label>
        <label htmlFor="ek_aciklamalar">
          Ek Açıklamalar:
          <input
            type="text"
            className=""
            name="ek_aciklamalar"
            id="ek_aciklamalar"
            value={formData['ek_aciklamalar']}
            readOnly
          />
        </label>
        <input
          className="w-36 rounded bg-blue-400 p-2 text-sm hover:bg-blue-300"
          type="submit"
          value="Gönder"
        ></input>
      </form>
    </div>
  )
}

export default Userpage
