import { useEffect, useState } from 'react'


export function useScrollDistance(distance: number) {
    const [isScrollDistanceReached, setIsScrollDistanceReached] = useState(window.scrollY > distance)
    const handleScroll = () => setIsScrollDistanceReached(window.scrollY > distance)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return isScrollDistanceReached
}
