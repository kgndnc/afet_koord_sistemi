import { useState } from 'react'

function AdresIhbar() {
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

    // make post request to backend

    console.log('Form submitted')
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
            defaultValue={''}
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
            defaultValue={''}
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
            defaultValue={''}
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
            defaultValue={''}
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
            defaultValue={''}
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
            defaultValue={''}
          />
        </label>
        <input
          className="w-36 rounded-sm bg-blue-400 p-2 text-sm hover:bg-blue-300"
          type="submit"
        ></input>
      </form>
    </div>
  )
}

export default AdresIhbar
