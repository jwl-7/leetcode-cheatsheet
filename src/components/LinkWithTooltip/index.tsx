import styles from './linkwithtooltip.module.sass'

import { MouseEvent, useRef, useState } from 'react'
import { useScrollTo } from '@hooks/useScrollTo'

import Tooltip from '@components/Tooltip'


interface LinkWithTooltipProps {
    href: string
    description: string
}


export default function LinkWithTooltip({ href, description }: LinkWithTooltipProps) {
    const ref = useRef<HTMLAnchorElement>(null)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const scrollToDestination = useScrollTo({ selector: href, offset: 72 })
    let hoverTimer: NodeJS.Timeout

    const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        window.history.replaceState({}, '', href)
        clearTimeout(hoverTimer)
        setShowTooltip(false)
        scrollToDestination()
    }

    const handleMouseEnter = () => {
        hoverTimer = setTimeout(() => {
            setShowTooltip(true)
        }, 700)
    }

    const handleMouseLeave = () => {
        clearTimeout(hoverTimer)
        setShowTooltip(false)
    }

    return (
        <div className={styles.linkWrapper}>
            <a
                ref={ref}
                href={href}
                className={styles.link}
                onClick={handleLinkClick}
                role="button"
                aria-description={description}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {description}
            </a>
            <Tooltip anchorRef={ref} content={description} showTooltip={showTooltip} />
        </div>
    )
}
