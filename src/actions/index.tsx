import { ADD_WIDGET, REMOVE_WIDGET, Widget } from "../reducers/types";


export const removeWidget = (n: number) => ({
    type: REMOVE_WIDGET,
    payload: n,
});

export const addWidget = (value: Widget) => ({
    type: ADD_WIDGET,
    payload: value,
});



