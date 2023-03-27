import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers:{}
});

export default tuitsSlice.reducer;