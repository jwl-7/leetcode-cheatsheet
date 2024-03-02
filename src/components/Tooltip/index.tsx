import styles from './tooltip.module.sass'

import { RefObject, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import clsx from '@utils/clsx'


interface TooltipProps {
    anchorRef: RefObject<HTMLElement>
    content: string
    showTooltip: boolean
}


export default function Tooltip({ anchorRef, content, showTooltip }: TooltipProps) {
    const ref = useRef<HTMLDivElement>(null)
    const [tooltipPosition, setTooltipPosition] = useState<{ top: number, left: number } | null>(null)
    const [shouldHide, setShouldHide] = useState<boolean>(false)

    const classes = clsx(
        styles.tooltip,
        !showTooltip && styles.exit
    )

    const handleAnimationStart = () => setShouldHide(false)
    const handleAnimationEnd = () => {
        if (!showTooltip) setShouldHide(true)
    }

    useEffect(() => {
        if (!showTooltip || !anchorRef.current) return

        const rect = anchorRef.current.getBoundingClientRect()
        const tooltipHeight = ref.current?.offsetHeight ?? 0
        const tooltipLeft = rect.left + window.scrollX
        const tooltipTop = rect.top + window.scrollY - tooltipHeight - 4

        setTooltipPosition({ top: tooltipTop, left: tooltipLeft })
    }, [showTooltip])

    return (showTooltip || !shouldHide) && anchorRef.current && ReactDOM.createPortal(
        <div
            ref={ref}
            className={classes}
            style={tooltipPosition ?? {}}
            onAnimationStart={handleAnimationStart}
            onAnimationEnd={handleAnimationEnd}
        >
            <span className={styles.text}>{content}</span>
        </div>,
        document.body
    )
}
