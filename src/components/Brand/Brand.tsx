import styles from './Brand.module.sass'
import { useState } from 'react'
import clsx from '@utils/clsx'

export default function Brand() {
    const [clickAnimation, setClickAnimation] = useState<string>(styles.rotate)
    const [isAnimating, setIsAnimating] = useState<boolean>(false)

    const animationClasses = [
        styles.bounce,
        styles.glowDisappear,
        styles.heartBeat,
        styles.rubberBand,
        styles.rotate
    ]
    const classes = clsx(
        styles.brand,
        isAnimating && clickAnimation
    )

    const handleAnimationEnd = () => setIsAnimating(false)
    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * animationClasses.length)
        const randomChoice = animationClasses[randomIndex]

        setIsAnimating(true)
        setClickAnimation(randomChoice)
    }

    return (
        <div
            className={classes}
            onClick={handleClick}
            onAnimationEnd={handleAnimationEnd}
        >
            JWL
        </div>
    )
}
