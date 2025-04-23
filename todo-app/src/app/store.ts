'use client';

import { todoSlice } from '@/app/todoSlice';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
   reducer: {
       todo: todoSlice.reducer
   }
});