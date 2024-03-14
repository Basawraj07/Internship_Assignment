

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface DashboardState {
  photos: any[];
  posts: any[];
  savedItems: any[];
}

const initialState: DashboardState = {
  photos: [],
  posts: [],
  savedItems: [],
};

export const fetchPhotos = createAsyncThunk('dashboard/fetchPhotos', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data.slice(0, 20); 
});

export const fetchPosts = createAsyncThunk('dashboard/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
  return response.data.slice(0, 20);
});



const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    saveItem(state, action) {
      state.savedItems.push(action.payload);
    },
    unsaveItem(state, action) {
      state.savedItems = state.savedItems.filter(item => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPhotos.fulfilled, (state, action) => {
      state.photos = action.payload;
    });
  },
});

export const { saveItem, unsaveItem } = dashboardSlice.actions;

export default dashboardSlice.reducer;
