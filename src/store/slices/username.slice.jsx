import { createSlice } from "@reduxjs/toolkit";

export const usernameSlice = createSlice({
    name: 'username',
    initialState: "Daniela",
    reducers: {
        usernameValue : (state, action) => {
            return action.payload
        }
    }

})

export const { usernameValue } = usernameSlice.actions;
export default usernameSlice.reducer;