import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
// import reducers here

const store = configureStore({
  reducer: {
     auth: authReducer,
    // appointments: appointmentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;