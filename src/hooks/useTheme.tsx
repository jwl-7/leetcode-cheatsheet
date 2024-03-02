import { useState, useEffect } from 'react'


export function useTheme() {
    const htmlElement = document.documentElement
    const [theme, setTheme] = useState('light')

    const handleThemeChange = () => {
        const newTheme = htmlElement.getAttribute('data-theme') ?? 'light'
        setTheme(newTheme)
    }

    useEffect(() => {
        htmlElement.addEventListener('themeChange', handleThemeChange)

        return () => htmlElement.removeEventListener('themeChange', handleThemeChange)
    }, [htmlElement])

    return theme
}
