import { RefObject, useEffect } from 'react'


export function useClickOutside(
    refs: RefObject<HTMLElement> | RefObject<HTMLElement>[],
    handler: VoidFunction
) {
    const handleClick = (event: MouseEvent) => {
        const clickedOutside = (ref: RefObject<HTMLElement>) => ref.current && !ref.current.contains(event.target as Node)
        if ((Array.isArray(refs) ? refs.every(clickedOutside) : clickedOutside(refs))) handler()
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    }, [refs, handler])
}
