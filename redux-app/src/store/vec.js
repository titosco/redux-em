const createSllice = require('@reduxjs/toolkit').createSlice;
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk;
const axios = require('axios');

const initailState = {
    loading: false,
    users: [],
    error: "",
}

//generate pending,fullfilled, rejected action types 
const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.data.map((user) => user.id))
})

const userSlice = createSllice({
    name: 'user',
    initailState,
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) =>{
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) =>{
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

Module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers