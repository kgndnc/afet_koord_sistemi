import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  isAdmin: false,

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Login user
export const login = createAsyncThunk

// Yoneticiyse sayfaların farklı versiyonlarını göster
// /adres-ihbar
// /bilgilendirme

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    // Reset state to default values
    reset: state => {
      state.isAdmin = false
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state.message = ''
    },

    logout: state => {
      state.isAdmin = false
      state.isError = false
      state.isSuccess = false
      state.isLoading = false
      state.message = ''
    },
  },

  // for async functions
  extraReducers: () => {},
})

export const { reset, logout } = authSlice.actions
export default authSlice.reducer
