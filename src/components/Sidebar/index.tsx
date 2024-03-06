import styles from './sidebar.module.sass'

import { RefObject, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from '@/hooks/useClickOutside'
import { useSidebar } from '@components/Sidebar/context'

import clsx from '@utils/clsx'
import SidebarLinks from './SidebarLinks'


interface SidebarProps {
    hamburgerButtonRef: RefObject<HTMLDivElement>
}


export default function Sidebar({ hamburgerButtonRef }: SidebarProps) {
    const ref = useRef<HTMLElement>(null)
    const { isSidebarOpen, showSidebar, hideSidebar } = useSidebar()
    const [shouldHide, setShouldHide] = useState<boolean>(false)

    const classes = clsx(
        styles.sidebar,
        !isSidebarOpen && styles.exit,
        !isSidebarOpen && shouldHide && styles.hide
    )

    const handleMediaQueryChange = (matches: boolean) => {
        if (matches && isSidebarOpen) hideSidebar()
        else if (!matches && !isSidebarOpen) showSidebar()
    }

    const isScreenMd = useMediaQuery({ maxWidth: 768 }, undefined, handleMediaQueryChange)

    const hideSidebarMd = () => {
        if (isScreenMd && isSidebarOpen) hideSidebar()
    }
    const handleAnimationStart = () => setShouldHide(false)
    const handleAnimationEnd = () => {
        if (!isSidebarOpen) setShouldHide(true)
    }

    useClickOutside([ref, hamburgerButtonRef], hideSidebarMd)

    return (
        <nav ref={ref} className={classes} onAnimationStart={handleAnimationStart} onAnimationEndCapture={handleAnimationEnd}>
            <div className={styles.scrollContainer}>
                <SidebarLinks />
            </div>
        </nav>
    )
}
