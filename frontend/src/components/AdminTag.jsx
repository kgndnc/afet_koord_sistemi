import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

function AdminTag() {
  const [{ isAdmin }, dispatch] = useStateValue()
  const navigate = useNavigate()

  return (
    <>
      {isAdmin ? (
        <div className="absolute right-0 top-0 z-10 pr-2 pt-1 text-center font-sans text-xs">
          <p>
            Yönetici oturumu{' '}
            <button
              className="text-blue-500"
              onClick={() => {
                dispatch({ type: 'LOG_OUT' })
                navigate('/')
              }}
            >
              Çıkış
            </button>
          </p>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default AdminTag
