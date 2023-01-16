import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    verse:"Verse will appear here",
    reference:" "
}
const verseSlice = createSlice({
    name: "verse",
    initialState,
    reducers:{
        change:(state, action)=>{
            state.verse = action.payload
        }
    }
})

export default verseSlice.reducer
export const {change} = verseSlice.actions