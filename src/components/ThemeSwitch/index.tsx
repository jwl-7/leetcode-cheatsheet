import styles from './themeswitch.module.sass'

import { useState, useEffect } from 'react'


export default function ThemeSwitch() {
    const htmlElement = document.documentElement
    const [darkMode, setDarkMode] = useState(false)

    const dispatchThemeEvent = () => {
        const themeChangeEvent = new Event('themeChange')
        htmlElement.dispatchEvent(themeChangeEvent)
    }

    const handleThemeChange = () => {
        setDarkMode(!darkMode)
        htmlElement.setAttribute('data-theme', !darkMode ? 'light' : 'dark')
        dispatchThemeEvent()
    }

    useEffect(() => {
        const theme = htmlElement.getAttribute('data-theme')
        setDarkMode(theme === 'light')
        dispatchThemeEvent()
    }, [])

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                aria-label="theme switch"
                id="theme-switch"
                type="checkbox"
                checked={darkMode}
                onChange={handleThemeChange}
            />
            <label className={styles.label} htmlFor="theme-switch">
                <span className={styles.indicator} />
                <span className={styles.decoration} />
            </label>
        </div>
    )
}
