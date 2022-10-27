import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
    productList: [],
    loading: false,
    currentPage: 1,
    postsPerPage: 4,
    categories: [],
    all_posts_for_filtering: []
}

const productSlice = createSlice({
    name: "list",
    initialState: INITIAL_STATE,
    reducers: {
        increment: (state) => {
            state.currentPage+=1;
        },
        decrement: (state)=> {
            state.loading += 1;
        },
        fetchData: (state, action) =>{
            state.productList = action.payload;
            
        },
        fetchDataForFiltering: (state, action) =>{
            state.all_posts_for_filtering = action.payload;
        },
        paginate: (state, action)=>{
            state.currentPage = action.payload;
        },
        fetchCat: (state, action) =>{
            state.categories = action.payload;
            

        },
        
    }

});

export const {increment, decrement, fetchData, paginate, fetchCat, fetchDataForFiltering} = productSlice.actions;

export default productSlice.reducer;