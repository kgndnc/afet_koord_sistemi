import { useState } from 'react'

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

    // TODO: Check if form data is valid (missing fields)

    // make post request to backend
    axios
      .post(endpoint, { address: formData }, { baseURL })
      .then(response => {
        console.log(
          "POST request sent...\nHere's the response back from server:"
        )

        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    console.log('Form submitted')

    // Clear form
    // TODO: if successful
    setFormData({
      il: '',
      ilce: '',
      mahalle: '',
      'sokak/cadde': '',
      no: '',
      ek_aciklamalar: '',
    })
  }

  console.log(formData)

  return (
    <div>
      <h2>Adres İhbar Formu</h2>
      <form
        className="flex max-w-md flex-col gap-3 border-2"
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      >
        <label htmlFor="il">
          İL:
          <input
            type="text"
            className=""
            name="il"
            id="il"
            value={formData.il}
          />
        </label>

        <label htmlFor="ilce">
          İLÇE:
          <input
            type="text"
            className=""
            name="ilce"
            id="ilce"
            value={formData.ilce}
          />
        </label>
        <label htmlFor="mahalle">
          MAHALLE:
          <input
            type="text"
            className=""
            name="mahalle"
            id="mahalle"
            value={formData.mahalle}
          />
        </label>
        <label htmlFor="sokak/cadde">
          SOKAK/CADDE:
          <input
            type="text"
            className=""
            name="sokak/cadde"
            id="sokak/cadde"
            value={formData['sokak/cadde']}
          />
        </label>
        <label htmlFor="no">
          NO:
          <input
            type="text"
            className=""
            name="no"
            id="no"
            value={formData.no}
          />
        </label>
        <label htmlFor="ek_aciklamalar">
          EK AÇIKLAMALAR:
          <input
            type="text"
            className=""
            name="ek_aciklamalar"
            id="ek_aciklamalar"
            value={formData['ek_aciklamalar']}
          />
        </label>
        <input
          className="w-36 rounded bg-blue-400 p-2 text-sm hover:bg-blue-300"
          type="submit"
        ></input>
      </form>

      <button
        className="mt-4 rounded bg-red-400 p-2"
        onClick={() => {
          // TODO: Place this button to Admin page

          // Backend URL
          const baseURL = 'http://localhost:5000/'
          const endpoint = 'api/addresses'

          // make post request to backend
          axios
            .get(endpoint, { baseURL })
            .then(response => {
              console.log(
                "GET request sent...\nHere's the response back from server:"
              )

              console.log(
                response.data.filter(value => value.ulasildi === false)
              )

              // Data is in `response.data`
            })
            .catch(error => {
              console.log(error)
            })
        }}
      >
        Adresleri listele
      </button>
    </div>
  )
}

export default Userpage
