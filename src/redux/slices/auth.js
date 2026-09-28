// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from '../../axios';

// export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) =>
// {
//     const { data } = await axios.post('/auth/login', params);

//     if (data.token)
//     {
//         localStorage.setItem('token', data.token);
//     }

//     return data;
// });

// export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () =>
// {
//     const { data } = await axios.get('/auth/me');
//     return data;
// });

// export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) =>
// {
//     const { data } = await axios.post('/auth/reg', params);

//     if (data.token)
//     {
//         localStorage.setItem('token', data.token);
//     }

//     return data;
// });

// const initialState = {
//     items: null,
//     loading: false
// };

// const slice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logout: (state) =>
//         {
//             state.items = null;
//             localStorage.removeItem('token');
//         }
//     },
//     extraReducers: (builder) =>
//     {
//         builder
//             .addCase(fetchAuth.pending, (state) =>
//             {
//                 state.loading = true;
//             })
//             .addCase(fetchAuth.fulfilled, (state, action) =>
//             {
//                 state.loading = false;
//                 state.items = action.payload;
//             })
//             .addCase(fetchAuth.rejected, (state, action) =>
//             {
//                 state.loading = false;
//             })

//             .addCase(fetchAuthMe.pending, (state) =>
//             {
//                 state.loading = true;
//             })
//             .addCase(fetchAuthMe.fulfilled, (state, action) =>
//             {
//                 state.loading = false;
//                 state.items = action.payload;
//             })
//             .addCase(fetchAuthMe.rejected, (state, action) =>
//             {
//                 state.loading = false;
//             })

//             .addCase(fetchRegister.pending, (state) =>
//             {
//                 state.loading = true;
//             })
//             .addCase(fetchRegister.fulfilled, (state, action) =>
//             {
//                 state.loading = false;
//                 state.items = action.payload;
//             })
//             .addCase(fetchRegister.rejected, (state, action) =>
//             {
//                 state.loading = false;
//             });
//     },
// });

// export const selectIsAuth = (state) =>
//     Boolean(state.auth.data?.token) ||
//     Boolean(localStorage.getItem('token'));

// export const authReducer = slice.reducer;

// export const { logout } = slice.actions;
