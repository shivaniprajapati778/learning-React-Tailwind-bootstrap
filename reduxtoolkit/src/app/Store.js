import  {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../Features/Todo/Todoslice'

export const store= configureStore({
    reducer:todoReducer
})