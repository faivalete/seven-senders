import { WidgetsState, WidgetsActionTypes, ADD_WIDGET, REMOVE_WIDGET } from './types';

const initialState: WidgetsState = {
    widgets: [],
}

export function widgetsReducer(
  state = initialState,
  action: WidgetsActionTypes
): WidgetsState {
  switch (action.type) {
    case ADD_WIDGET: {
      return {
        ...state,
        ...action.payload
      }
    }
    default:
      return state
  }
}