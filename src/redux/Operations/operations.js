import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {toast} from "react-hot-toast";

// axios.defaults.baseURL = 'https://64ede3ab1f8721827141f3ba.mockapi.io/api/v1/';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchDataContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            toast.error(`Something went wrong! ${error.message}`);
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);


export const addDataContacts = createAsyncThunk(
    'contacts/addContacts',
    async (contactData, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', {
                name: contactData.name,
                number: contactData.number,
            });
        return response.data;
        } catch (error) {
            toast.error(`Something went wrong! ${error.message}`);
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);


export const deleteDataContacts = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            toast.error(`Something went wrong! ${error.message}`);
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);


export const editDataContacts = createAsyncThunk(
  'contacts/editContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactData.id}`, {
        name: contactData.name,
        number: contactData.number,
      });
      return response.data;

    } catch (error) {
      toast.error(`Something went wrong! ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
