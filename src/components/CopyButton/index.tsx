import styles from './copybutton.module.sass'

import { useState } from 'react'

import clsx from '@utils/clsx'


interface CopyButtonProps {
    onClick: Function
}


export default function CopyButton({ onClick }: CopyButtonProps) {
    const [copyState, setCopyState] = useState<string>('show')
    const [checkState, setCheckState] = useState<String>('hide')

    const copySvgClasses = clsx(
        styles.copySvg,
        copyState === 'enter' && styles.enter,
        copyState === 'exit' && styles.exit
    )
    const checkSvgClasses = clsx(
        styles.checkSvg,
        checkState === 'exit' && styles.exit
    )
    const checkSvgPathClasses = clsx(
        styles.checkSvgPath,
    )

    const handleClick = () => {
        if (copyState === 'show' && checkState === 'hide') {
            setCopyState('exit')
            onClick()
        }

    }

    const handleCopyAnimationEnd = () => {
        if (copyState === 'enter') {
            setCopyState('show')
        }
        if (copyState === 'exit') {
            setCopyState('hide')
            setCheckState('show')
        }
    }

    const handleCheckAnimationEnd = () => {
        if (checkState === 'show') {
            setTimeout(() => {
                setCheckState('exit')
            }, 500)
        }
        if (checkState === 'exit') {
            setCheckState('hide')
            setCopyState('enter')
        }
    }

    const renderCopySvg = () => {
        return copyState !== 'hide' && (
            <svg
                className={copySvgClasses}
                viewBox="0 0 512 512"
                onAnimationEnd={handleCopyAnimationEnd}
            >
                <path d="M64 464H288c8.8 0 16-7.2 16-16V384h48v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h64v48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16zM224 304H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16V288c0 8.8 7.2 16 16 16zm-64-16V64c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V288c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64z"/>
            </svg>
        )
    }

    const renderCheckSvg = () => {
        return checkState !== 'hide' && (
            <svg
                className={checkSvgClasses}
                viewBox="0 0 16 16"
                onAnimationEnd={handleCheckAnimationEnd}
            >
                <path className={checkSvgPathClasses} d="M3.428571,9.14285714 L6.85714286,12.57142857 L12.5714286,3.42857143"></path>
            </svg>
        )
    }

    return (
        <button
            className={styles.copyButton}
            onClick={handleClick}
        >
            {renderCopySvg()}
            {renderCheckSvg()}
        </button>
    )
}
