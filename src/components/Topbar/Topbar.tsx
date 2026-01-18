import styles from './Topbar.module.sass'

import { useLayoutEffect, MouseEvent, RefObject, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useScrollTo } from '@/hooks/useScrollTo'
import { useSidebar } from '@components/Sidebar/SidebarProvider'

import clsx from '@/utils/clsx'
import Brand from '@components/Brand/Brand'
import ThemeSwitch from '@components/ThemeSwitch/ThemeSwitch'
import Github from '@icons/Github'

interface TopbarProps {
    forwardedRef: RefObject<HTMLDivElement>
}

export default function Topbar({ forwardedRef }: TopbarProps) {
    const ref = useRef<HTMLElement | null>(null)
    const scrollToTop = useScrollTo({ selector: 'main' })
    const { isSidebarOpen, toggleSidebar } = useSidebar()
    const isScreenMd = useMediaQuery({ maxWidth: 768 })

    const hamburgerClasses = clsx(
        styles.hamburgerIcon,
        !isSidebarOpen && styles.collapsed
    )

    useLayoutEffect(() => {
        if (!ref.current) return

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                const height = entry.borderBoxSize[0].blockSize
                document.documentElement.style.setProperty('--topbar-height', `${height}px`)
            }
        })

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const handleTitleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        window.history.replaceState({}, '', window.location.pathname)
        scrollToTop()
    }
    const handleHamburgerClick = () => toggleSidebar()

    const renderBrand = () => !isScreenMd && <Brand />
    const renderTitle = () => {
        return !isScreenMd && (
            <a href="main" onClick={handleTitleClick} role="button">
                <h1 className={styles.title}>LeetCode Cheatsheet</h1>
            </a>
        )
    }
    const renderGitHubButton = () => {
        return (
            <a
                href="/leetcode-cheatsheet"
                aria-label="GitHub source"
                className={styles.iconLink}
                target="_blank"
            >
                <Github />
            </a>
        )
    }
    const renderButtons = () => {
        return !isScreenMd ? (
            <div className={styles.buttonContainer}>
                {renderGitHubButton()}
                <ThemeSwitch />
            </div>
        ) : (
            <>
                <ThemeSwitch />
                {renderGitHubButton()}
            </>
        )
    }

    return (
        <header ref={ref} className={styles.topbar}>
            <div className={styles.container}>
                <div ref={forwardedRef} className={styles.hamburger} onClick={handleHamburgerClick}>
                    <span className={clsx(hamburgerClasses, styles.hamburgerTop)} />
                    <span className={clsx(hamburgerClasses, styles.hamburgerMiddle)} />
                    <span className={clsx(hamburgerClasses, styles.hamburgerBottom)} />
                </div>
                {renderBrand()}
                {renderTitle()}
                {renderButtons()}
            </div>
        </header>
    )
}
