import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiBus } from '../../components/common/endpoints';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async ({ username, password }) => {
  const response = await axios.post(apiBus.login_api, {
    username,
    password,
  });
  console.log('response is', response);
  return response.data; // Return only the data from the response
});
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    token: null,
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.user = action.payload.username;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoggedIn = true;
        state.error = action.error.message;
        state.token = 'TUHIN';
      });
  },
});

export const userSelector = (state) => state.auth;

export const { logout } = authSlice.actions;

export default authSlice.reducer;

// import usePostRequest from '../../components/common/customePostApiCall';
//Use customePostApiCall (customhooks)
// const { postData } =  usePostRequest(API_URL + apiBus.login_api)
// postData({username,password})
// const res = await postData({username, password})
