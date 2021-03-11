import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = enabled => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkModeEnabled', enabled)
    useEffect(() => {
        darkModeEnabled ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkModeEnabled])

    return [darkModeEnabled, setDarkModeEnabled]
}

export default useDarkMode;