import { useLocalStorageState } from '../hooks';
import { WidgetsState, WidgetsActionTypes, ADD_WIDGET, REMOVE_WIDGET, Widget } from './types';


const initialWidgets = window.localStorage.getItem('widgets');
const initialState: WidgetsState = {
    widgets: initialWidgets? JSON.parse(initialWidgets) as Array<Widget> : []
};

export function widgetsReducer(
  state = initialState,
  action: WidgetsActionTypes
): WidgetsState {
  switch (action.type) {
    case ADD_WIDGET: {
      return {
        ...state,
        widgets: [...state.widgets, action.payload],
      }
    }
    case REMOVE_WIDGET: {
      return {
        ...state,
        widgets: state.widgets.filter((widget, idx) => idx !== action.payload),
      }
    }
    default:
      return state
  }
}