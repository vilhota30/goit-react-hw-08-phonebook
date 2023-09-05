import {createSlice} from "@reduxjs/toolkit";

import { fetchDataContacts, deleteDataContacts, addDataContacts, editDataContacts} from "redux/Operations/operations";

const handleStatusPending = state => {
    state.isLoading = true;
};

const handleStatusRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleStatusFulfilled = state => {
    state.isLoading = false;
    state.error = null;
}
 
const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
    },
    
    extraReducers: {
      [fetchDataContacts.pending]: handleStatusPending,
      [addDataContacts.pending]: handleStatusPending,
      [deleteDataContacts.pending]: handleStatusPending,
      [editDataContacts.pending]: handleStatusPending,

      [fetchDataContacts.fulfilled] (state, action) {
        handleStatusFulfilled(state);
        state.items = action.payload;
      },

      [addDataContacts.fulfilled] (state, action) {
        handleStatusFulfilled(state);
        state.items.push(action.payload);
      },

      [deleteDataContacts.fulfilled] (state, action) {
        handleStatusFulfilled(state);
        const index = state.items.findIndex(
            contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },

      [editDataContacts.fulfilled](state, action) {
        handleStatusFulfilled(state);
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id,
        );
        state.items.splice(index, 1, action.payload);
      },

      [fetchDataContacts.rejected]: handleStatusRejected,
      [addDataContacts.rejected]: handleStatusRejected,
      [deleteDataContacts.rejected]: handleStatusRejected,
      [editDataContacts.rejected]: handleStatusRejected,

    },
});

export const contactsReducer = contactsSlice.reducer;
