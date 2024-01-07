import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        type: 'Type',
        age: "Age",
        region: "Region",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload }, // All we're doing is setting the input to the state.name
        chooseType: (state, action) => { state.type = action.payload },
        chooseAge: (state, action) => { state.age = action.payload },
        chooseRegion: (state, action) => { state.region = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseType, chooseAge, chooseRegion } = rootSlice.actions