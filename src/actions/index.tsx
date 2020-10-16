import { ADD_WIDGET, REMOVE_WIDGET } from "../reducers/types";


export const removeWidget = (n: number) => ({
    type: REMOVE_WIDGET,
    payload: n,
});

export const addWidget = (n: number) => ({
    type: ADD_WIDGET,
    payload: n,
});



