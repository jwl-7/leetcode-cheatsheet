import styles from './Accordion.module.sass'

import { ReactNode, useState } from 'react'

import AnimateHeight from 'react-animate-height'
import clsx from '@utils/clsx'
import Chevron from '@icons/Chevron'

interface AccordionProps {
    title: string
    children: ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false)
    const height = isOpen ? 'auto' : 0
    const buttonClasses = clsx(
        styles.button,
        isOpen && styles.open
    )

    const handleClick = () => setIsOpen(!isOpen)

    return (
        <div className={styles.accordion}>
            <button className={buttonClasses} onClick={handleClick}>
                <span>{title}</span>
                <Chevron />
            </button>
            <AnimateHeight
                animateOpacity
                height={height}
                duration={400}
            >
                <div className={styles.content}>{children}</div>
            </AnimateHeight>
        </div>
    )
}
