import { useCallback, useState, useEffect } from 'react';

/**
 * optional app prefix for local storage (to avoid conflicts between multiple apps in localhost)
 * */
const appPrefix = process.env.NEXT_PUBLIC_APP_PREFIX || '';

export function useLocalStorage(key: string, defaultValue) {
    if (typeof window === 'undefined') return [defaultValue];
    return useStorage(`${appPrefix}${key}`, defaultValue, window?.localStorage);
}

export function useSessionStorage(key: string, defaultValue) {
    if (typeof window === 'undefined') return [defaultValue];
    return useStorage(
        `${appPrefix}${key}`,
        defaultValue,
        window?.sessionStorage
    );
}

function useStorage(key: string, defaultValue, storageObject) {
    if (typeof window === 'undefined') return;
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue);

        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (value === undefined) return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject]);

    const remove = useCallback(() => {
        setValue(undefined);
    }, []);

    return [value, setValue, remove];
}
