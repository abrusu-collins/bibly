import {createSlice} from "@reduxjs/toolkit"


const initialState = {
    verse:"Verse will appear here",
    reference:" "
}
const verseSlice = createSlice({
    name: "verse",
    initialState,
    reducers:{
        changeVerse:(state, action)=>{
            state.verse = action.payload.text
        },
        changeReference:(state, action)=>{
            state.reference = action.payload.reference
        }
    }
})

export default verseSlice.reducer
export const {changeVerse,changeReference} = verseSlice.actions