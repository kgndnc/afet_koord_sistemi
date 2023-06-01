import { Address } from '../types/addressType'

function AdressBox({
  il,
  ilce,
  mahalle,
  'sokak/cadde': sokakCadde,
  no,
  ulasildi,
  ek_aciklamalar,
}: Address) {
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
      >
        {!ulasildi ? 'Ulaşıldı' : 'Ulaşılmadı'}
      </button>
    </div>
  )
}

export default AdressBox
