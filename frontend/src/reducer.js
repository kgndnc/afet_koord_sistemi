export const initialState = {
  isAdmin: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return { ...state, isAdmin: true }

    case 'LOG_OUT':
      return { ...state, isAdmin: false }

    default:
      return state
  }
}

export default reducer
