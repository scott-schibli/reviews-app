import {
    configureStore,
    createAction,
    createReducer,
} from "@reduxjs/toolkit";

export const setPageNumber = createAction("SET_PAGE_NUMBER");
export const setAvgRating = createAction('SET_AVG_RATING');
export const setIsEnd = createAction('SET_IS_END');
export const setTotalPages = createAction('SET_TOTOAL_PAGES');

const initialState = {
    pageNumber: 1,
    averageRating: 0,
    totalPages: 0,
};

const reducer = createReducer(initialState, (builder) => {
    /**
     * Note: createReducer uses 'Immer' internally which automatically creates a copy of the state
     *       and then lets me mutate that copy--rather than the actual state--and then returns any changes
     *       as a new state object (a final copy).
     */
    builder
        .addCase(setPageNumber, (state, action) => {
            state.pageNumber = action.payload;
        })
        .addCase(setAvgRating, (state, action) => {
            state.averageRating = action.payload;
        })
        .addCase(setTotalPages, (state, action) => {
            state.totalPages = action.payload
        })
});

export const store = configureStore({
    reducer: reducer,
});