import {Widget} from '../components/Widget';

export interface WidgetsState {
    widgets: Array<Widget>;
}

export const ADD_WIDGET = 'ADD_WIDGET'
export const REMOVE_WIDGET = 'REMOVE_WIDGET'

interface AddWidgetAction {
  type: typeof ADD_WIDGET
  payload: Widget
}

interface RemoveWidgetAction {
    type: typeof REMOVE_WIDGET
    payload: number
  }

export type WidgetsActionTypes = AddWidgetAction | RemoveWidgetAction

