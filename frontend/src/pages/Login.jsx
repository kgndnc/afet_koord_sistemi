import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { useState } from 'react'

function Login() {
  const [{ isAdmin }, dispatch] = useStateValue()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({ user: '', password: '' })

  const handleFormChange = event => {
    setFormData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    if (formData.user === '' || formData.password === '') {
      alert('Lütfen boş alanları doldurun')
      return
    }

    if (formData.user === 'admin' && formData.password === '1234') {
      // Successful login

      dispatch({ type: 'LOG_IN' })
      setFormData({ user: '', password: '' })
      navigate('/')

      return
    }

    alert('Kullanıcı adı veya şifre yanlış')

    setFormData(prevData => {
      return {
        ...prevData,
        password: '',
      }
    })
  }

  return !isAdmin ? (
    <div className="mx-auto mt-3 flex max-w-lg flex-col font-sans">
      <h3 className="mb-8 text-center">YÖNETİCİ GİRİŞİ</h3>

      <form
        className="grid max-w-lg grid-cols-[1fr_3fr] gap-2"
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
      >
        <div className="labels grid grid-flow-row items-center justify-items-end gap-3">
          <label htmlFor="user">Kullanıcı adı:</label>
          <label htmlFor="password">Şifre:</label>
        </div>

        <div className="inputs grid grid-flow-row gap-3">
          <input
            type="text"
            className=""
            name="user"
            id="user"
            value={formData.user}
          />

          <input
            type="password"
            className=""
            name="password"
            id="password"
            value={formData.password}
          />
        </div>

        <input
          className="col-span-2 mt-3 w-36 place-self-center rounded bg-blue-400 p-2 text-sm hover:bg-blue-300"
          type="submit"
          value="Gönder"
        ></input>
      </form>
    </div>
  ) : (
    <div className="mx-auto mt-24 max-w-lg text-center font-sans">
      <p>Yönetici oturumundasınız.</p>
      <p>
        Çıkış yapmak için{' '}
        <button
          className="text-blue-500"
          onClick={() => {
            dispatch({ type: 'LOG_OUT' })
            navigate('/')
          }}
        >
          tıklayın
        </button>
      </p>
    </div>
  )
}

export default Login
