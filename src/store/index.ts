
import {combineReducers} from 'redux';
// src/store/index.ts

import { widgetsReducer } from './../reducers/widgets'

export const rootReducer = combineReducers({
  widgets: widgetsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

