import {useState, useEffect} from 'react';
import { Widget } from '../components/Widget';


const defaultValue = [];
export const useLocalStorageState = (defaultValue: Array<Widget>, key: string) => {
    const [value, setValue] = useState(() => {
        const localValue = window.localStorage.getItem(key);
        return localValue !== null
        ? JSON.parse(localValue)
        : defaultValue;
    });
    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
}