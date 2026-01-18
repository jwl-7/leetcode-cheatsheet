import { useCallback, useEffect, useRef } from 'react'

interface ScrollToProps {
    selector: string
    duration?: number
    offset?: number
}

function easeInOutQuad(t: number): number {
    return t < 0.5
        ? 2 * t * t
        : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export function useScrollTo({
    selector,
    duration = 1500,
    offset = 0,
}: ScrollToProps) {
    const targetRef = useRef<HTMLElement | null>(null)
    const frameID = useRef<number>(0)
    const userInterrupt = useRef<boolean>(false)

    const cancel = () => {
        if(frameID.current) cancelAnimationFrame(frameID.current)
    }

    const handleInterrupt = () => userInterrupt.current = true

    const scrollTo = useCallback((callbackOffset?: number) => {
        if (!targetRef.current) return
        cancel()
        const activeOffset = callbackOffset !== undefined ? callbackOffset : offset
        userInterrupt.current = false
        const targetElement = targetRef.current
        const targetPosition = targetElement.offsetTop
        const currentPosition = window.scrollY
        const distance = targetPosition - currentPosition - activeOffset
        const startTime = performance.now()

        if (!distance) return

        const animateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const time = elapsedTime / duration
            const easeTime = easeInOutQuad(time > 1 ? 1 : time)
            const scrollDestination = currentPosition + distance * easeTime

            window.scrollTo({ top: scrollDestination })

            if (elapsedTime < duration && !userInterrupt.current) {
                requestAnimationFrame(animateScroll)
            } else {
                frameID.current = 0
            }
        }

        requestAnimationFrame(animateScroll)
    }, [selector, duration, offset])

    useEffect(() => {
        targetRef.current = document.querySelector(selector)
        window.addEventListener('wheel', handleInterrupt, { passive: true })
        window.addEventListener('touchmove', handleInterrupt, { passive: true })

        return () => {
            cancel()
            window.removeEventListener('wheel', handleInterrupt)
            window.removeEventListener('touchmove', handleInterrupt)
        }
    }, [selector])

    return scrollTo
}
