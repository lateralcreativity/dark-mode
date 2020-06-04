import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (isEnabled) => {
    const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage('darkModeEnabled', isEnabled)
    useEffect(() => {
        darkModeEnabled ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [darkModeEnabled])

    return [darkModeEnabled, setDarkModeEnabled]
}

export default useDarkMode