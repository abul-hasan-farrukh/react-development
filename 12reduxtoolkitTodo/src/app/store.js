//every react application must have just 1 store.js which is also called a single source of truth.

import {configureStore} from '@reduxjs/toolkit';
import superman from '../features/todo/todoSlice'

// exporting the store below so we can use it inside App.jsx or main.jsx 
export const store = configureStore({ //configureStore is used to configure the store and it accepts an object inside it.
    reducer: superman // creating a reducer here so that we can update values in the store using reducer
}) 

